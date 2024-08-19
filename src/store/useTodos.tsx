import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Task } from "../types/Objects";
import { setObject } from "@/utils/setObject";

type State = {
  todos: Task[];
};

type Actions = {
  addTodo: (task: Task) => void;
  toggleRemoveTodo: (id: string) => void;
  updateTodo: (task: Task) => void;
  clearTodos: () => void;
  clearTodo: (id: string) => void;
  getTodo: (id: string) => Task | undefined;
  getCompletedTodos: () => Task[];
  getDeletedTodos: () => Task[];
  getActiveTodos: () => Task[];
  getOverdueTodos: () => Task[];
  toggleCompleteTodo: (id: string) => void;
  setTodos: (todos: Task[] | []) => void;
};

export const useTodos = create<State & Actions>()(
  immer((set, get) => ({
    todos: [],
    setTodos: (todos: Task[] | []) => set({ todos }),
    addTodo: (task) =>
      set((state) => {
        state.todos.push(task);
        setObject("todos", state.todos);
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
        setObject("todos", state.todos);
      }),
    updateTodo: (task: Task) =>
      set((state) => {
        state.todos = state.todos.map((t) => (t.id === task.id ? task : t));
        setObject("todos", state.todos);
      }),

    clearTodos: () =>
      set((state) => {
        state.todos = [];
        setObject("todos", state.todos);
      }),
    clearTodo: (id: string) =>
      set((state) => {
        state.todos = state.todos.filter((t) => t.id !== id);
        setObject("todos", state.todos);
      }),
    getTodo: (id: string) => get().todos.find((t) => t.id === id),
    getActiveTodos: () =>
      get().todos.filter(
        (t) =>
          !t.completed &&
          !t.deleted &&
          (!t.dueDate || new Date(t.dueDate) > new Date())
      ),
    getCompletedTodos: () =>
      get().todos.filter((t) => t.completed && !t.deleted),
    getDeletedTodos: () => get().todos.filter((t) => t.deleted),
    getOverdueTodos: () =>
      get().todos.filter(
        (t) =>
          t.dueDate &&
          new Date(t.dueDate) < new Date() &&
          !t.deleted &&
          !t.completed
      ),
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
        setObject("todos", state.todos);
      });
    },
  }))
);
