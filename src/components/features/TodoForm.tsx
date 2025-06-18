import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { CreateTodoData, Todo } from '../../types/todo';

interface TodoFormProps {
    onSubmit: (data: CreateTodoData) => void;
    todo?: Todo;
    onCancel?: () => void;
    isEdit?: boolean;
}

export const TodoForm: React.FC<TodoFormProps> = ({
    onSubmit,
    todo,
    onCancel,
    isEdit = false,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CreateTodoData>({
        defaultValues: {
            title: todo?.title || '',
            description: todo?.description || '',
        },
    });

    const onFormSubmit = async (data: CreateTodoData) => {
        await onSubmit(data);
        if (!isEdit) {
            reset();
        }
    };

    return (
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle>{isEdit ? 'Edit Todo' : 'Add New Todo'}</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className='space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor='title' className='text-sm font-medium'>
                            Title *
                        </label>
                        <Input
                            id='title'
                            placeholder='Enter todo title...'
                            {...register('title', {
                                required: 'Title is required',
                                minLength: {
                                    value: 1,
                                    message:
                                        'Title must be at least 1 character',
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        'Title must be less than 100 characters',
                                },
                            })}
                        />
                        {errors.title && (
                            <p className='text-sm text-destructive'>
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div className='space-y-2'>
                        <label
                            htmlFor='description'
                            className='text-sm font-medium'>
                            Description
                        </label>
                        <Textarea
                            id='description'
                            placeholder='Enter todo description (optional)...'
                            {...register('description', {
                                maxLength: {
                                    value: 500,
                                    message:
                                        'Description must be less than 500 characters',
                                },
                            })}
                        />
                        {errors.description && (
                            <p className='text-sm text-destructive'>
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    <div className='flex gap-2 pt-4'>
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            className='flex-1'>
                            {isSubmitting
                                ? 'Saving...'
                                : isEdit
                                ? 'Update Todo'
                                : 'Add Todo'}
                        </Button>
                        {isEdit && onCancel && (
                            <Button
                                type='button'
                                variant='outline'
                                onClick={onCancel}
                                disabled={isSubmitting}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
