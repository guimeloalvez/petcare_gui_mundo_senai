import { Router, type Request, type Response } from "express"
import { parceiroService } from "../service/parceiro.service.js"
import { CriarParceiro } from "../types/parceiro.js"

export const parceiro_router = Router()

parceiro_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            parceiroService.getAll()

            response.json(res)
    } catch (error) {
        console.error(error);
    }
})

parceiro_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            parceiroService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


parceiro_router.post("/", async (request: Request<{}, {}, CriarParceiro>, response: Response) => {
    try {
        const dados = request.body

        const parceiro = await parceiroService.create(dados)
        return response.status(201).json(parceiro)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


parceiro_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            parceiroService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

parceiro_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await parceiroService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

