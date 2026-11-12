import { useState, useEffect } from 'react';
import { roleService } from '../services/role.service';
import { type CargoCredentials } from '../types/role.types';

export function useRoles() {
  const [roles, setRoles] = useState<CargoCredentials[]>([]);
  const [isLoadingRoles, setIsLoadingRoles] = useState(false);
  const [rolesError, setRolesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoles = async () => {
      setIsLoadingRoles(true);
      setRolesError(null);
      try {
        const data = await roleService.getCargos();
        setRoles(data);
      } catch (err: any) {
        setRolesError('Erro ao carregar a lista de cargos.');
      } finally {
        setIsLoadingRoles(false);
      }
    };

    fetchRoles();
  }, []);

  return { roles, isLoadingRoles, rolesError };
}