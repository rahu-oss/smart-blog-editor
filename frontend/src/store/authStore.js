import { create } from "zustand";

export const useAuth = create((set) => ({

token: null,

login: (token) => set({ token }),

logout: () => set({ token: null })

}));

