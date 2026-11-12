export interface Cargo {
  id: string;
  nome: string;
}

export interface LoginDTO {
  email: string;
  senha: string;
}


export interface RespostaLogin {
  nome: string;
  email: string;
  cargo: Cargo; 
  token: string;
}
