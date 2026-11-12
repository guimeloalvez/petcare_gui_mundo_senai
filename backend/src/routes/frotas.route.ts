import { Router, type Request, type Response } from "express"
import { frotaService } from "../service/frota.service.js"
import type {Frota, CriarFrota} from "../types/frota.js"

 export const frota_router = Router()

frota_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
        frotaService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})

frota_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
           frotaService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


frota_router.post("/", async (request: Request<{}, {}, CriarFrota>, response: Response) => {
    try {
        const dados = request.body

        const cliente = await frotaService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


frota_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            frotaService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

frota_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await frotaService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})