import { pool } from "../database/conection.js";
import type { Frota, CriarFrota } from '../types/frota.js'

class FrotaService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM frotas")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarFrota): Promise<Frota> {
        const res = await pool.query<Frota>
            ('INSERT INTO frota (marca, modelo) VALUES ($1, $2) RETURNING *', [dados.marca, dados.modelo])

        const frota = res.rows[0]
        if (!frota) {
            throw new Error("O banco não retornou o cliente cadastrado");
        }

        return frota

    }

    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE frota SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM frota WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM frota WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
}

export const frotaService = new FrotaService()