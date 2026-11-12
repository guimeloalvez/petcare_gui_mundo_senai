import { funcionarioService } from "./../service/funcionario.service.js"
import { Router, type Request, type Response } from "express"
import type { CriarFuncionario} from "../types/funcionario.js"


export const funcionario_router = Router()


funcionario_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            funcionarioService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


funcionario_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            funcionarioService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


funcionario_router.post("/", async (request: Request<{}, {}, CriarFuncionario>, response: Response) => {
    try {
        const dados = request.body

        const cliente = await funcionarioService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


funcionario_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            funcionarioService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

funcionario_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await funcionarioService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})
