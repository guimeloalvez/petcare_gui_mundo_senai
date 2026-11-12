import { api } from "../../../lib/api";
import { type RegisterCredentials } from "../types/register.types";

export const registerService = {
  async registerFuncionario(data: RegisterCredentials) {
    const response = await api.post('/funcionario', data);
    return response.data;
  }
};