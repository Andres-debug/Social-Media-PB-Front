import { create } from 'zustand';
import { AxiosError } from 'axios';
import type { User } from '../types'; 
import api from '../services/api';

interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: 'user' | 'admin';
  birth_date: string;
  receive_notifications: boolean;
  bio?: string;
  avatar_url?: string;
  gender?: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (userData: User) => void;
  register: (payload: RegisterPayload) => Promise<unknown>;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  register: async (payload) => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await api.post('/auth/register', payload);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ?? 'No se pudo completar el registro.';

      set({ error: errorMessage });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => set({ user: null, isAuthenticated: false, error: null }),
}));

