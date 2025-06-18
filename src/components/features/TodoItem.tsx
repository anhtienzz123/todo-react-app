import React, { useState } from 'react';
import { Trash2, Edit3, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { TodoForm } from './TodoForm';
import type { Todo, CreateTodoData } from '../../types/todo';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, data: CreateTodoData) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    onToggle,
    onDelete,
    onUpdate,
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleUpdate = (data: CreateTodoData) => {
        onUpdate(todo.id, data);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            onDelete(todo.id);
        }
    };

    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    if (isEditing) {
        return (
            <div className='w-full flex justify-center'>
                <TodoForm
                    todo={todo}
                    onSubmit={handleUpdate}
                    onCancel={handleCancelEdit}
                    isEdit={true}
                />
            </div>
        );
    }

    return (
        <Card
            className={`w-full transition-opacity ${
                todo.completed ? 'opacity-75' : ''
            }`}>
            <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start space-x-3 flex-1'>
                        <Checkbox
                            checked={todo.completed}
                            onCheckedChange={() => onToggle(todo.id)}
                            className='mt-1'
                        />
                        <div className='flex-1'>
                            <CardTitle
                                className={`text-lg ${
                                    todo.completed
                                        ? 'line-through text-muted-foreground'
                                        : ''
                                }`}>
                                {todo.title}
                            </CardTitle>
                            {todo.description && (
                                <CardDescription
                                    className={`mt-2 ${
                                        todo.completed ? 'line-through' : ''
                                    }`}>
                                    {todo.description}
                                </CardDescription>
                            )}
                        </div>
                    </div>
                    <div className='flex space-x-1'>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={handleEdit}
                            disabled={todo.completed}
                            className='h-8 w-8'>
                            <Edit3 className='h-4 w-4' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={handleDelete}
                            className='h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10'>
                            <Trash2 className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='pt-0'>
                <div className='flex items-center text-xs text-muted-foreground'>
                    <Calendar className='h-3 w-3 mr-1' />
                    <span>Created: {formatDate(todo.createdAt)}</span>
                    {todo.updatedAt.getTime() !== todo.createdAt.getTime() && (
                        <span className='ml-3'>
                            Updated: {formatDate(todo.updatedAt)}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
