import { Router, type Request, type Response } from "express";
import { pet_donoService } from "../service/pet_dono.service.js";
import { CriarPetDono } from "../types/pet_dono.js";

export const pet_dono_router = Router();

pet_dono_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await pet_donoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno",
  });
});

pet_dono_router.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await pet_donoService.getById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

pet_dono_router.post(
  "/",
  async (request: Request<{}, {}, CriarPetDono>, response: Response) => {
    try {
      const dados = request.body;

      const pet_dono = await pet_donoService.create(dados);
      return response.status(201).json(pet_dono);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

pet_dono_router.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await pet_donoService.deleteById(request.params.id);

      return response.json(res);
    } catch (error) {
      console.error(error);
    }

    return response.status(500).json({
      erro: "Erro Interno",
    });
  },
);

pet_dono_router.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await pet_donoService.updateById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
