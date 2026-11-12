import { pool } from "../database/conection.js";
import { Consulta, CriarConsulta } from "../types/consulta.js";

class ConsultaService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM consulta");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarConsulta): Promise<Consulta> {
    const res = await pool.query<Consulta>(
      "INSERT INTO consulta (data, id_animal, id_medico, id_servico) VALUES ($1, $2, $3, $4) RETURNING *",
      [dados.data, dados.id_animal, dados.id_medico, dados.id_servico],
    );

    const consulta = res.rows[0];
    if (!consulta) {
      throw new Error("O banco não retornou a consulta cadastrada");
    }

    return consulta;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE consulta SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM consulta WHERE id = $1", [
        id,
      ]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM consulta WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const consultaService = new ConsultaService();
