import {Router, type Request, type Response} from "express"
import { registro_pontoService } from "../service/registro_ponto.service.js"
import { CriarRegistroPonto } from "../types/registro_ponto.js"

export const registro_ponto_router = Router();

registro_ponto_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await registro_pontoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

registro_ponto_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await registro_pontoService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

registro_ponto_router.post(
  "/",
  async (request: Request<{}, {}, CriarRegistroPonto>, response: Response) => {
    try {
      const dados = request.body;

      const registro_ponto = await registro_pontoService.create(dados);
      return response.status(201).json(registro_ponto);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

registro_ponto_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await registro_pontoService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

registro_ponto_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await registro_pontoService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
