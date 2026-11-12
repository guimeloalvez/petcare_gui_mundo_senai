import { Router, type Request, type Response } from "express";
import { vendaService } from "../service/venda.service.js";
import { CriarVenda } from "../types/venda.js";

export const venda_router = Router();

venda_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await vendaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

venda_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await vendaService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

venda_router.post(
  "/",
  async (request: Request<{}, {}, CriarVenda>, response: Response) => {
    try {
      const dados = request.body;

      const venda = await vendaService.create(dados);
      return response.status(201).json(venda);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

venda_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await vendaService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

venda_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await vendaService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
