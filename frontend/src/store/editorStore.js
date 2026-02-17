import { create } from "zustand";

export const useEditor = create(

(set) => ({

content: "",

setContent:

(c) => set({ content: c })

})
);

