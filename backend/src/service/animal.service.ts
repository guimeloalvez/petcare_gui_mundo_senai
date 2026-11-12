import { pool } from "../database/conection.js";
import { Animal, CriarAnimal } from "../types/animal.js"

class AnimalService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM animal")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE animal SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM animal WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }


    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM animal WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarAnimal): Promise<Animal> {
        const res = await pool.query<Animal>
            ('INSERT INTO animais (nome) VALUES ($1) RETURNING *', [dados.nome])

        const animal = res.rows[0]
        if (!animal) {
            throw new Error("O banco não retornou o animal cadastrado");
        }

        return animal

    }

}
export const animalService = new AnimalService()