import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Task } from "../components/todoList/types";

type State = {
  todos: Task[];
};

type Actions = {
  addTodo: (task: Task) => void;
  removeTodo: (id: string) => void;
  updateTodo: (task: Task) => void;
  clearTodos: () => void;
  getTodo: (id: string) => Task | undefined;
};

export const useTodos = create<State & Actions>()(
  immer((set, get) => ({
    todos: [],
    addTodo: (task) =>
      set((state) => {
        state.todos.push(task);
      }),

    removeTodo: (id: string) =>
      set((state) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      }),

    updateTodo: (task: Task) =>
      set((state) => {
        state.todos = state.todos.map((t) => (t.id === task.id ? task : t));
      }),

    clearTodos: () => set(() => ({ todos: [] })),
    getTodo: (id: string) => get().todos.find((t) => t.id === id),
  }))
);
