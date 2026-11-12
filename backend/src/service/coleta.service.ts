import { pool } from "../database/conection.js";
import { Coleta, CriarColeta } from "../types/coleta.js";

class ColetaService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM coleta");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarColeta): Promise<Coleta> {
    const res = await pool.query<Coleta>(
      "INSERT INTO coleta (dt_coleta, endereco, id_cliente, id_animal) VALUES ($1, $2, $3, $4) RETURNING *",
      [dados.dt_coleta, dados.endereco, dados.id_cliente, dados.id_animal],
    );

    const coleta = res.rows[0];
    if (!coleta) {
      throw new Error("O banco não retornou a coleta cadastrado");
    }

    return coleta;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE coleta SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM coleta WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM coleta WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const coletaService = new ColetaService();
