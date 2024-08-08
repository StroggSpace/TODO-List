export type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deleted: boolean;
    note: string | null;
    dueDate: Date | null;
    priority: boolean;
    completedAt: Date | null;
};