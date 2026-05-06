import { create } from 'zustand';
import { AxiosError } from 'axios';
import type { User } from '../types'; 
import api from '../services/api';

const AUTH_TOKEN_KEY = 'auth_token';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const tokenFromStorage = localStorage.getItem(AUTH_TOKEN_KEY);

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
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  register: (payload: RegisterPayload) => Promise<unknown>;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: Boolean(tokenFromStorage),
  token: tokenFromStorage,
  isLoading: false,
  error: null,
  login: async (payload) => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await api.post<LoginResponse>('/auth/login', payload);
      localStorage.setItem(AUTH_TOKEN_KEY, data.token);
      set({ token: data.token, isAuthenticated: true });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ?? 'No se pudo iniciar sesión.';

      set({ error: errorMessage, isAuthenticated: false, token: null });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
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
  logout: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    set({ user: null, isAuthenticated: false, token: null, error: null });
  },
}));

