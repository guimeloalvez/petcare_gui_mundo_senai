import { pool } from './../database/conection.js';
import {CriarParceiro, Parceiro} from "../types/parceiro.js"
class ParceiroService {

    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM parceiros")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

     async create(dados: CriarParceiro): Promise<Parceiro> {
            const res = await pool.query<Parceiro>
                ('INSERT INTO parceiro (nome) VALUES ($1, $2, $3, $4) RETURNING *', [dados.nome])
    
            const parceiro = res.rows[0]
            if (!parceiro) {
                throw new Error("O banco não retornou o parceiro cadastrado");
            }
    
            return parceiro
    
        }
    
        async updateById(id: string) {
            try {
                const res = await pool.query("UPDATE parceiro SET id = id WHERE id = $1 RETURNING *", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
        async getById(id: string) {
            try {
                const res = await pool.query("SELECT * FROM parceiro WHERE id = $1", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
        async deleteById(id: string) {
            try {
                const res = await pool.query("DELETE FROM parceiro WHERE id = $1 RETURNING *", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
}

export const parceiroService = new ParceiroService()