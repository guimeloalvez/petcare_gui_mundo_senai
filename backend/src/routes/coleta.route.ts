import {Router, type Request, type Response} from "express"
import { coletaService } from "../service/coleta.service.js"
import { CriarColeta } from "../types/coleta.js"

export const coleta_router = Router();

coleta_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await coletaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

coleta_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await coletaService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

coleta_router.post(
  "/",
  async (request: Request<{}, {}, CriarColeta>, response: Response) => {
    try {
      const dados = request.body;

      const coleta = await coletaService.create(dados);
      return response.status(201).json(coleta);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

coleta_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await coletaService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

coleta_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await coletaService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);