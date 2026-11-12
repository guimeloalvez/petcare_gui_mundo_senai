import bcrypt from "bcrypt";
import { pool } from "../database/conection.js";
import type { CriarFuncionario, Funcionario } from "../types/funcionario.js";

class FuncionarioService {
  async getAll() {
    try {
      const res = await pool.query(
        "SELECT id, nome, email, id_cargo FROM funcionario",
      );
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarFuncionario): Promise<Funcionario> {
    const saltRounds = Number(process.env.BCRYPT_SALT) || 12;
    const senhaHash = await bcrypt.hash(dados.senha, saltRounds);
    
    const res = await pool.query<Funcionario>(
      "INSERT INTO funcionario (nome, id_cargo, email, senha) VALUES ($1, $2, $3, $4) RETURNING id, nome, id_cargo, email",
      [dados.nome, dados.id_cargo, dados.email, senhaHash],
    );

    const funcionario = res.rows[0];
    if (!funcionario) {
      throw new Error("O banco não retornou o funcionario cadastrado");
    }

    return funcionario;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE funcionario SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query(
        "SELECT id, nome, email, id_cargo FROM funcionario WHERE id = $1",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM funcionario WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const funcionarioService = new FuncionarioService();
