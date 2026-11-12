import { api } from "../../../lib/api";
import type { RegisterCredentials, Session } from "../types/auth.types";

export async function register(credentials: RegisterCredentials): Promise<Session> {
  const response = await api.post<Session>("/funcionario", credentials);

  return response.data;
}
