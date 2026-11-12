import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/use-register';
import { useRoles } from '../../role/hooks/use-role'; // Importe o hook de cargos

export function RegisterPage() {
  const navigate = useNavigate();
  const { register, isLoading, error } = useRegister();
  const { roles, isLoadingRoles, rolesError } = useRoles(); // Inicia a busca de cargos
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    id_cargo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await register(formData);
    if (success) {
      navigate('/login'); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF9F4] p-4 text-[#153229]">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(21,50,41,0.08)] border border-[#E9E6DE]">
        
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Cadastro de Funcionário
          </h2>
          <p className="mt-2 text-sm text-[#92968E]">
            Preencha os dados abaixo para registrar um novo acesso.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 border border-red-100 text-sm text-red-600">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#153229]">Nome Completo</label>
            <input 
              type="text" 
              name="nome" 
              placeholder="Digite o nome" 
              value={formData.nome} 
              onChange={handleChange} 
              required 
              className="w-full rounded-xl border border-[#E9E6DE] bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#A3A69E] hover:border-[#C4C7C0] focus:border-[#3F9271] focus:ring-4 focus:ring-[#EAF4EC]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#153229]">E-mail</label>
            <input 
              type="email" 
              name="email" 
              placeholder="exemplo@empresa.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full rounded-xl border border-[#E9E6DE] bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#A3A69E] hover:border-[#C4C7C0] focus:border-[#3F9271] focus:ring-4 focus:ring-[#EAF4EC]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#153229]">Senha</label>
            <input 
              type="password" 
              name="senha" 
              placeholder="••••••••" 
              value={formData.senha} 
              onChange={handleChange} 
              required 
              className="w-full rounded-xl border border-[#E9E6DE] bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#A3A69E] hover:border-[#C4C7C0] focus:border-[#3F9271] focus:ring-4 focus:ring-[#EAF4EC]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#153229]">Cargo</label>
            <select
              name="id_cargo"
              value={formData.id_cargo}
              onChange={handleChange}
              required
              disabled={isLoadingRoles}
              className="w-full appearance-none rounded-xl border border-[#E9E6DE] bg-white px-4 py-3.5 text-sm outline-none transition-all hover:border-[#C4C7C0] focus:border-[#3F9271] focus:ring-4 focus:ring-[#EAF4EC] disabled:bg-gray-50 disabled:text-gray-400"
            >
              <option value="" disabled>
                {isLoadingRoles ? "Carregando cargos..." : "Selecione um cargo"}
              </option>
              {roles.map((cargo) => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.nome}
                </option>
              ))}
            </select>
            {rolesError && <p className="mt-1 text-xs text-red-500">{rolesError}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isLoading || isLoadingRoles}
            className="mt-2 w-full rounded-xl bg-[#3F9271] px-4 py-4 text-sm font-bold text-white transition-all hover:bg-[#2E795A] focus:outline-none focus:ring-4 focus:ring-[#EAF4EC] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Processando...' : 'Cadastrar Funcionário'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#92968E]">
          Já possui cadastro?{' '}
          <button 
            type="button"
            onClick={() => navigate('/login')}
            className="font-bold text-[#3F9271] hover:underline"
          >
            Fazer login
          </button>
        </div>
      </div>
    </div>
  );
}