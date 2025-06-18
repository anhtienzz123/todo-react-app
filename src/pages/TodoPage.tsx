import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoForm } from '../components/features/TodoForm';
import { TodoList } from '../components/features/TodoList';
import type { CreateTodoData, Todo } from '../types/todo';

export const TodoPage: React.FC = () => {
    const {
        todos,
        isLoading,
        error,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
    } = useTodos();

    const handleAddTodo = (data: CreateTodoData) => {
        addTodo(data);
    };

    const handleUpdateTodo = (id: string, data: CreateTodoData) => {
        updateTodo(id, data);
    };

    const totalTodos = todos.length;
    const completedTodos: number = todos.filter(
        (todo: Todo) => todo.completed
    ).length;
    const incompleteTodos = totalTodos - completedTodos;

    return (
        <div className='min-h-screen bg-background'>
            <div className='container mx-auto px-4 py-8 max-w-4xl'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold mb-2'>Todo App</h1>
                    <p className='text-muted-foreground'>
                        Stay organized and get things done
                    </p>
                    {error && (
                        <div className='mt-4 p-3 bg-destructive/10 text-destructive rounded-md'>
                            {error}
                        </div>
                    )}
                    {isLoading && (
                        <div className='mt-4 text-muted-foreground'>
                            Loading...
                        </div>
                    )}
                    {totalTodos > 0 && (
                        <div className='mt-4 flex justify-center gap-4 text-sm'>
                            <span className='px-3 py-1 bg-secondary rounded-full'>
                                Total: {totalTodos}
                            </span>
                            <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full'>
                                Active: {incompleteTodos}
                            </span>
                            <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full'>
                                Completed: {completedTodos}
                            </span>
                        </div>
                    )}
                </div>

                {/* Add Todo Form */}
                <div className='flex justify-center mb-8'>
                    <TodoForm onSubmit={handleAddTodo} />
                </div>

                {/* Todo List */}
                <div className='max-w-2xl mx-auto'>
                    <TodoList
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onUpdate={handleUpdateTodo}
                    />
                </div>
            </div>
        </div>
    );
};
