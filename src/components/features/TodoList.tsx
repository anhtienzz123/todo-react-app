import React from 'react';
import { TodoItem } from './TodoItem';
import type { Todo, CreateTodoData } from '../../types/todo';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, data: CreateTodoData) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    onToggle,
    onDelete,
    onUpdate,
}) => {
    if (todos.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center py-12 text-center'>
                <div className='text-6xl mb-4'>📝</div>
                <h3 className='text-lg font-medium text-muted-foreground mb-2'>
                    No todos yet
                </h3>
                <p className='text-sm text-muted-foreground'>
                    Create your first todo to get started!
                </p>
            </div>
        );
    }

    const completedTodos: Todo[] = todos.filter((todo: Todo) => todo.completed);
    const incompleteTodos: Todo[] = todos.filter(
        (todo: Todo) => !todo.completed
    );

    return (
        <div className='space-y-6'>
            {/* Incomplete Todos */}
            {incompleteTodos.length > 0 && (
                <div className='space-y-3'>
                    <h3 className='text-sm font-medium text-muted-foreground'>
                        To Do ({incompleteTodos.length})
                    </h3>
                    <div className='space-y-3'>
                        {incompleteTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={onToggle}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Completed Todos */}
            {completedTodos.length > 0 && (
                <div className='space-y-3'>
                    <h3 className='text-sm font-medium text-muted-foreground'>
                        Completed ({completedTodos.length})
                    </h3>
                    <div className='space-y-3'>
                        {completedTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={onToggle}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
