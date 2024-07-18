export type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deleted: boolean;
    description: string | null;
    dueDate: Date | null;
    priority: number;
    completedAt: Date | null;  
    icon: string;
};