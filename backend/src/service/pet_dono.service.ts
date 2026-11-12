import { pool } from "../database/conection.js";
import { PetDono, CriarPetDono } from "../types/pet_dono.js";

class PetDonoService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM pet_dono");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarPetDono): Promise<PetDono> {
    const res = await pool.query<PetDono>(
      "INSERT INTO PetDono (id_animal, id_cliente) VALUES ($1, $2) RETURNING *",
      [dados.id_animal, dados.id_cliente],
    );

    const pet_dono = res.rows[0];
    if (!pet_dono) {
      throw new Error("O banco não retornou o Dono do pet cadastrado");
    }

    return pet_dono;
  }

  async updateById(id: string) {
    try {
      const res = await pool.query(
        "UPDATE pet_dono SET id = id WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM pet_dono WHERE id = $1", [
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
        "DELETE FROM pet_dono WHERE id = $1 RETURNING *",
        [id],
      );
      return res.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
export const pet_donoService = new PetDonoService();
