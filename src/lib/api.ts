import type { Todo, CreateTodoData, UpdateTodoData } from '../types/todo';

// Mock API service - replace with actual API calls
// const API_BASE_URL = 'http://localhost:3001/api'; // Update with your actual API URL

// Simulate API delay
const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const todoApi = {
    // Get all todos
    getTodos: async (): Promise<Todo[]> => {
        await delay(500);
        // For now, return empty array - in a real app, this would fetch from your API
        return [];
    },

    // Create a new todo
    createTodo: async (data: CreateTodoData): Promise<Todo> => {
        await delay(300);
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        // In a real app, this would make a POST request to your API
        return newTodo;
    },

    // Update a todo
    updateTodo: async (id: string, data: UpdateTodoData): Promise<Todo> => {
        await delay(300);
        // In a real app, this would make a PUT/PATCH request to your API
        // For now, we'll just return a mock updated todo
        const updatedTodo: Todo = {
            id,
            title: data.title || 'Updated Todo',
            description: data.description,
            completed: data.completed || false,
            createdAt: new Date(), // In real app, this would come from the server
            updatedAt: new Date(),
        };
        return updatedTodo;
    },

    // Delete a todo
    deleteTodo: async (id: string): Promise<void> => {
        await delay(300);
        // In a real app, this would make a DELETE request to your API
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        console.log(`Deleting todo with id: ${id}`);
        return;
    },

    // Toggle todo completion
    toggleTodo: async (id: string): Promise<Todo> => {
        await delay(300);
        // In a real app, this would make a PATCH request to your API
        const toggledTodo: Todo = {
            id,
            title: 'Toggled Todo',
            description: 'This todo was toggled',
            completed: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return toggledTodo;
    },
};
