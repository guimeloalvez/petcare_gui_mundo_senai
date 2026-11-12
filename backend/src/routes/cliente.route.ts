import { Router, type Request, type Response } from "express";
import { clienteService } from "../service/cliente.service.js";
import { CriarCliente } from "../types/cliente.js";

export const cliente_router = Router();

cliente_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await clienteService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

cliente_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await clienteService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cliente_router.post(
  "/",
  async (request: Request<{}, {}, CriarCliente>, response: Response) => {
    try {
      const dados = request.body;

      const cliente = await clienteService.create(dados);
      return response.status(201).json(cliente);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cliente_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await clienteService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cliente_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await clienteService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
