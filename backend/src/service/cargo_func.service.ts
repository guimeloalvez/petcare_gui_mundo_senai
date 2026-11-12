import { pool } from "../database/conection.js";
import {CargoFunc, CriarCargoFunc} from "../types/cargo_func.js"

class CargoFuncService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM cargo_func");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarCargoFunc): Promise<CargoFunc> {
    const res = await pool.query<CargoFunc>(
      "INSERT INTO cargo_func (nome) VALUES ($1) RETURNING *",
      [dados.nome],
    );

    const cargo_func = res.rows[0];
    if (!cargo_func) {
      throw new Error("O banco não retornou o cargo cadastrado");
    }

    return cargo_func;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE cargo_func SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM cargo_func WHERE id = $1", [id]);
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async deleteById(id: string) {
    try {
      const res = await pool.query(
        "DELETE FROM cargo_func WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const cargo_funcService = new CargoFuncService();