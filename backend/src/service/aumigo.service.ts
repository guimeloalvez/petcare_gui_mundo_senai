import { pool } from "../database/conection.js";
import type { Aumigo, CriarAumigo } from "../types/aumigo.js";

class AumigoService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM aumigos")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
    async create(dados: CriarAumigo): Promise<Aumigo> {
        const res = await pool.query<Aumigo>
            ('INSERT INTO aumigo (dt_inicio, dt_fim, status, id_parceiro) VALUES ($1, $2, $3, $4) RETURNING *', [dados.dt_inicio, dados.dt_fim, dados.status, dados.id_parceiro])

        const aumigo = res.rows[0]
        if (!aumigo) {
            throw new Error("O banco não retornou a assinatura cadastrado");
        }

        return aumigo
    }


    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE aumigo SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM aumigo WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM aumigo WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
}
    export const aumigoService = new AumigoService()