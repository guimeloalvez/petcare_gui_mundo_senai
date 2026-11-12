import { Router, type Request, type Response } from "express"
import { log_sistemaService } from "../service/log_sistema.service.js"
import { CriarLogSistema } from "../types/log_sistema.js"

export const log_sistema_router = Router()


log_sistema_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            log_sistemaService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


log_sistema_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
           log_sistemaService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


log_sistema_router.post("/", async (request: Request<{}, {},CriarLogSistema>, response: Response) => {
    try {
        const dados = request.body

        const cliente = await log_sistemaService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


log_sistema_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            log_sistemaService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

log_sistema_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await log_sistemaService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})
