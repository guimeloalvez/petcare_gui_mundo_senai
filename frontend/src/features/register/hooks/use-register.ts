import { useState } from 'react';
// 1. Importe o registerService (nome que você exportou no outro arquivo)
import { registerService } from '../services/register.service';
import { type RegisterCredentials } from '../types/register.types';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      // 2. Chame o método através do serviço importado
      await registerService.registerFuncionario(data);
      
      // Lógica de sucesso (ex: redirecionar ou mostrar toast)
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao cadastrar funcionário.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
}