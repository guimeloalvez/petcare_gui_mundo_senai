import { Router, type Request, type Response } from "express";
import { authService } from "../service/auth.service.js";
import type { LoginDTO } from "../types/auth.js";

export const auth_router = Router();

auth_router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body as LoginDTO;

    if (!email || !senha) {
      return res.status(400).json({ erro: "Email e senha são obrigatórios" });
    }

    const resultado = await authService.login({ email, senha });
    if (!resultado) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    return res.json(resultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro Interno" });
  }
});