import { api } from "../../../lib/api";
import { type CargoCredentials } from "../types/role.types";

export const roleService = {
  async getCargos(): Promise<CargoCredentials[]> {
    const response = await api.get('/cargo');
    // Ajuste "response.data" se a sua API retornar a lista dentro de alguma propriedade (ex: response.data.cargos)
    return response.data; 
  }
};