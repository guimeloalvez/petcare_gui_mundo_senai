import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../database/conection.js";
import type { LoginDTO, RespostaLogin } from "../types/auth.ts";


class AuthService {
  async login({ email, senha }: LoginDTO): Promise<RespostaLogin | null> {
    const res = await pool.query(
      `SELECT f.id, f.nome, f.email, f.senha,
      c.id AS cargo_id, c.nome AS cargo_nome
      FROM funcionario f
      JOIN cargo_func c ON c.id = f.id_cargo
      WHERE f.email = $1`,
      [email],
    );
    
    const func = res.rows[0];
    console.log(func.email, func.senha)
    console.log(email, senha)
    if (!func) return null;

    const senhaOk = await bcrypt.compare(senha, func.senha);
    console.log(senhaOk)
    if (!senhaOk) return null;

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET não definido");

    const token = jwt.sign({ id: func.id, cargo: func.cargo_id }, secret, {
      expiresIn: "8h",
    });

    return {
      nome: func.nome,
      email: func.email,
      cargo: { id: func.cargo_id, nome: func.cargo_nome },
      token,
    };
  }
}

export const authService = new AuthService();
