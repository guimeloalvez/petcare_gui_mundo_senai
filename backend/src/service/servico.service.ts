import { pool } from "../database/conection.js";
import {Servico, CriarServico} from "../types/servico.js"

class ServicoService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM servico");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarServico): Promise<Servico> {
    const res = await pool.query<Servico>(
      "INSERT INTO servico (nome) VALUES ($1) RETURNING *",
      [dados.nome],
    );

    const servico = res.rows[0];
    if (!servico) {
      throw new Error("O banco não retornou o serviço cadastrado");
    }

    return servico;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE servico SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM servico WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM servico WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const servicoService = new ServicoService();