import { Settings } from "@/types/Objects";
import { setObject } from "@/utils/setObject";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  settings: {
    deleteDays: number;
    hiddenCompletedTodos: boolean;
    displayMode: "list" | "grid";
  };
};

type Actions = {
  setDeleteDays: (days: number) => void;
  getDeleteDays: () => number;
  toggleHiddenCompleted: () => void;
  setDisplayMode: (mode: "list" | "grid") => void;
  setSettings: (settings: Settings) => void;
  setDefaultSettings: () => void;
};

export const useSettings = create<State & Actions>()(
  immer((set, get) => ({
    settings: {
      deleteDays: 30,
      hiddenCompletedTodos: false,
      displayMode: "list",
    },
    setDeleteDays: (days) =>
      set((state) => {
        state.settings.deleteDays = days > 30 ? 30 : days;
        setObject("settings", state.settings);
      }),
    getDeleteDays: () => get().settings.deleteDays,
    toggleHiddenCompleted: () =>
      set((state) => {
        state.settings.hiddenCompletedTodos =
          !state.settings.hiddenCompletedTodos;
        setObject("settings", state.settings);
      }),
    setDisplayMode: (mode) =>
      set((state) => {
        state.settings.displayMode = mode;
        setObject("settings", state.settings);
      }),
    setSettings: (settings) =>
      set((state) => {
        state.settings = settings;
        setObject("settings", state.settings);
      }),
    setDefaultSettings: () =>
      set((state) => {
        state.settings = {
          deleteDays: 30,
          hiddenCompletedTodos: false,
          displayMode: "list",
        };
        setObject("settings", state.settings);
      }),
  }))
);
