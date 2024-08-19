export interface Note {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deleted: boolean;
    note: string | null;
}

export interface Task extends Note {
    completed: boolean;
    dueDate?: Date | null;
    priority: boolean;
    completedAt: Date | null;
    deadline: boolean;
}
