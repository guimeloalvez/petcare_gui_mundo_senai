export interface RegisterCredentials {
  nome: string;
  id_cargo: string;
  email: string;
  senha: string;
}

export interface Session {
  nome: string;
  email: string;
  id_cargo: string;
  token: string;
}
