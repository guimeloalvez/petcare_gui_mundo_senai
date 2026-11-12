import { pool } from './../database/conection.js';
import type {CriarEstoque, Estoque} from '../types/estoque.js'
class EstoqueService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM estoque")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

       async create(dados: CriarEstoque): Promise<Estoque> {
            const res = await pool.query<Estoque>
                ('INSERT INTO cliente (nome, descricao, quantidade, valor, dt_criacao, dt_att, dt_validade) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [dados.nome, dados.descricao, dados.quantidade, dados.valor, dados.dt_criacao, dados.dt_att, dados.dt_criacao])
    
            const cliente = res.rows[0]
            if (!cliente) {
                throw new Error("O banco não retornou o produto cadastrado");
            }
    
            return cliente
    
        }
    
        async updateById(id: string) {
            try {
                const res = await pool.query("UPDATE estoque SET id = id WHERE id = $1 RETURNING *", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
        async getById(id: string) {
            try {
                const res = await pool.query("SELECT * FROM estoque WHERE id = $1", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
        async deleteById(id: string) {
            try {
                const res = await pool.query("DELETE FROM estoque WHERE id = $1 RETURNING *", [id])
                return res.rows[0]
            } catch (error) {
                console.error(error);
            }
        }
}

export const estoqueService = new EstoqueService()