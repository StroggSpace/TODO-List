import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  darkMode: boolean;
};

type Actions = {
  toggleThemeMode: (mode: boolean) => void;
};

export const useDarkMode = create<State & Actions>()(
  immer((set) => ({
    darkMode: true,
    toggleThemeMode: (mode) =>
      set((state) => {
        state.darkMode = mode;
      }),
  }))
);
