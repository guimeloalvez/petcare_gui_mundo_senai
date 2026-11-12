import { Router, type Request, type Response } from "express";
import { aumigoService } from "../service/aumigo.service.js";
import { CriarAumigo } from "../types/aumigo.js";

export const aumigo_router = Router()

aumigo_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
        aumigoService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})

aumigo_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            aumigoService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


aumigo_router.post("/", async (request: Request<{}, {}, CriarAumigo>, response: Response) => {
    try {
        const dados = request.body

        const aumigo = await aumigoService.create(dados)
        return response.status(201).json(aumigo)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


aumigo_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
           aumigoService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

aumigo_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await aumigoService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})