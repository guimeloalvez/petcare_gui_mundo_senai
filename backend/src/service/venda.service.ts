import { pool } from "../database/conection.js";
import {Venda, CriarVenda} from "../types/venda.js"

class VendaService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM venda");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarVenda): Promise<Venda> {
    const res = await pool.query<Venda>(
      "INSERT INTO venda (id_item, id_funcionario, id_cliente, data) VALUES ($1, $2, $3, $4) RETURNING *",
      [dados.id_item, dados.id_funcionario, dados.id_cliente, dados.data],
    );

    const venda = res.rows[0];
    if (!venda) {
      throw new Error("O banco não retornou a venda cadastrado");
    }

    return venda;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE venda SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM venda WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM venda WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const vendaService = new VendaService();