import { pool } from "../database/conection.js"
import {CriarLogSistema, LogSistema} from "../types/log_sistema.js"

class LogSistemaService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM log_sistema")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarLogSistema): Promise<LogSistema> {
        const res = await pool.query<LogSistema>
            ('INSERT INTO log_sistema (op_realizada, descricao, data, id_funcinario) VALUES ($1, $2, $3, $4) RETURNING *', [dados.op_realizada, dados.descricao, dados.data, dados.id_funcinario])

        const log_sistema = res.rows[0]
        if (!log_sistema) {
            throw new Error("O banco não retornou o log do sistema");
        }

        return log_sistema

    }

    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE log_sistema SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM log_sistema WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM log_sistema WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

}
export const log_sistemaService = new LogSistemaService()


