import {Router, type Request, type Response} from "express"
import { consultaService } from "../service/consulta.service.js"
import { CriarConsulta } from "../types/consulta.js"

export const consulta_router = Router();

consulta_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await consultaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

consulta_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await consultaService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

consulta_router.post(
  "/",
  async (request: Request<{}, {}, CriarConsulta>, response: Response) => {
    try {
      const dados = request.body;

      const consulta = await consultaService.create(dados);
      return response.status(201).json(consulta);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

consulta_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await consultaService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

consulta_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await consultaService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);