import { Settings, Task } from "@/types/Objects";

export const getCurrentTasks = (
  {
    activeTodos,
    completedTodos,
    overdueTodos,
  }: {
    activeTodos: Task[];
    completedTodos: Task[];
    overdueTodos: Task[];
  },
  listName: string,
  settings: Settings
) => {
  switch (listName) {
    case "active":
      return activeTodos;
    case "completed":
      if (!settings.hiddenCompletedTodos) {
        return completedTodos;
      }
      return [];
    case "deleted":
      return overdueTodos;
    default:
      return [];
  }
};
