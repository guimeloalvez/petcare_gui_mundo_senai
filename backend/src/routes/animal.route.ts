import { Router, type Request, type Response } from "express"
import { animalService } from "../service/animal.service.js"
import { CriarAnimal } from "../types/animal.js"

export const animal_router = Router()

animal_router.get("/", async (request: Request, response: Response) => {
  try {
    const res = await
      animalService.getAll()

    return response.json(res)
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno"
  })
})

animal_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
  const { id } = request.params;

  try {
    const res = await animalService.updateById(id);

    return response.json(res)
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro Interno"
    })
  }
})

animal_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
  try {
    const res = await
      animalService.getById(request.params.id)

    return response.json(res)
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno"
  })
})


animal_router.post("/", async (request: Request<{}, {}, CriarAnimal>, response: Response) => {
  try {
    const dados = request.body

    const cliente = await animalService.create(dados)
    return response.status(201).json(cliente)
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno"
  })

})


animal_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
  try {
    const res = await
      animalService.deleteById(request.params.id)

    return response.json(res)
  } catch (error) {
    console.error(error);
  }

  return response.status(500).json({
    erro: "Erro Interno"
  })
})
