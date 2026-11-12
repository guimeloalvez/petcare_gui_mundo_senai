import { Router, type Request, type Response } from "express";
import { cargo_funcService } from "../service/cargo_func.service.js";
import { CriarCargoFunc } from "../types/cargo_func.js";

export const cargo_func_router = Router();

cargo_func_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await cargo_funcService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

cargo_func_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await cargo_funcService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cargo_func_router.post(
  "/",
  async (request: Request<{}, {}, CriarCargoFunc>, response: Response) => {
    try {
      const dados = request.body;

      const cargo_func = await cargo_funcService.create(dados);
      return response.status(201).json(cargo_func);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cargo_func_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await cargo_funcService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

cargo_func_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await cargo_funcService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
