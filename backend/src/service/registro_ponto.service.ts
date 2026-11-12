import { pool } from "../database/conection.js";
import {RegistroPonto, CriarRegistroPonto} from "../types/registro_ponto.js"

class RegistroPontoService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM registro_ponto");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarRegistroPonto): Promise<RegistroPonto> {
    const res = await pool.query<RegistroPonto>(
      "INSERT INTO registro_ponto (data, id_funcionario) VALUES ($1, $2) RETURNING *",
      [dados.data, dados.id_funcionario],
    );

    const registro_ponto = res.rows[0];
    if (!registro_ponto) {
      throw new Error("O banco não retornou o registro ponto cadastrado");
    }

    return registro_ponto;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE registro_ponto SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM registro_ponto WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM registro_ponto WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const registro_pontoService = new RegistroPontoService();