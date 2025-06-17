import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Todo, CreateTodoData, UpdateTodoData } from '../types/todo';

interface TodoStore {
    todos: Todo[];
    isLoading: boolean;
    error: string | null;
    addTodo: (data: CreateTodoData) => void;
    updateTodo: (id: string, data: UpdateTodoData) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    setTodos: (todos: Todo[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useTodoStore = create<TodoStore>()(
    devtools(
        (set) => ({
            todos: [],
            isLoading: false,
            error: null,

            addTodo: (data: CreateTodoData) => {
                const newTodo: Todo = {
                    id: crypto.randomUUID(),
                    title: data.title,
                    description: data.description,
                    completed: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };

                set((state) => ({
                    todos: [...state.todos, newTodo],
                }));
            },

            updateTodo: (id: string, data: UpdateTodoData) => {
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, ...data, updatedAt: new Date() }
                            : todo
                    ),
                }));
            },

            deleteTodo: (id: string) => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                }));
            },

            toggleTodo: (id: string) => {
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? {
                                  ...todo,
                                  completed: !todo.completed,
                                  updatedAt: new Date(),
                              }
                            : todo
                    ),
                }));
            },

            setTodos: (todos: Todo[]) => {
                set({ todos });
            },

            setLoading: (isLoading: boolean) => {
                set({ isLoading });
            },

            setError: (error: string | null) => {
                set({ error });
            },
        }),
        {
            name: 'todo-store',
        }
    )
);
