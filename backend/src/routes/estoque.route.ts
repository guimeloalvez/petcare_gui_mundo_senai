import { CriarEstoque } from '../types/estoque.js';
import { estoqueService } from './../service/estoque.service.js';
import { Router, type Request, type Response } from "express";

export const estoque_router = Router()

estoque_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
        estoqueService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})

estoque_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            estoqueService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


estoque_router.post("/", async (request: Request<{}, {}, CriarEstoque>, response: Response) => {
    try {
        const dados = request.body

        const estoque = await estoqueService.create(dados)
        return response.status(201).json(estoque)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


estoque_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            estoqueService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

estoque_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await estoqueService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})
