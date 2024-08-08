import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Task } from "../components/todoList/types";

type State = {
  todos: Task[];
};

type Actions = {
  addTodo: (task: Task) => void;
  toggleRemoveTodo: (id: string) => void;
  updateTodo: (task: Task) => void;
  clearTodos: () => void;
  getTodo: (id: string) => Task | undefined;
  getCompletedTodos: () => Task[];
  getDeletedTodos: () => Task[];
  getActiveTodos: () => Task[];
  getOverdueTodos: () => Task[];
  toggleCompleteTodo: (id: string) => void;
};

export const useTodos = create<State & Actions>()(
  immer((set, get) => ({
    todos: [],
    addTodo: (task) =>
      set((state) => {
        state.todos.push(task);
      }),

    toggleRemoveTodo: (id: string) =>
      set((state) => {
        state.todos = state.todos.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              deleted: !t.deleted,
              updatedAt: new Date(),
            };
          }
          return t;
        });
      }),
    updateTodo: (task: Task) =>
      set((state) => {
        state.todos = state.todos.map((t) => (t.id === task.id ? task : t));
      }),

    clearTodos: () => set(() => ({ todos: [] })),
    getTodo: (id: string) => get().todos.find((t) => t.id === id),
    getActiveTodos: () => get().todos.filter((t) => !t.completed && !t.deleted),
    getCompletedTodos: () =>
      get().todos.filter((t) => t.completed && !t.deleted),
    getDeletedTodos: () => get().todos.filter((t) => t.deleted),
    getOverdueTodos: () =>
      get().todos.filter((t) => t.dueDate && t.dueDate < new Date()),
    toggleCompleteTodo: (id: string) => {
      set((state) => {
        state.todos = state.todos.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              completed: !t.completed,
              completedAt: t.completed ? null : new Date(),
              updatedAt: new Date(),
            };
          }
          return t;
        });
      });
    },
  }))
);
