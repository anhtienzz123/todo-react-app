import { useTodoStore } from '../store/todoStore';
import type { CreateTodoData } from '../types/todo';

// This hook provides a clean interface for todo operations
// In the future, this could be enhanced with TanStack Query for server state management
export function useTodos() {
    const {
        todos,
        isLoading,
        error,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        setLoading,
        setError,
    } = useTodoStore();

    const handleAddTodo = async (data: CreateTodoData) => {
        try {
            setLoading(true);
            setError(null);
            addTodo(data);
            // In the future, this could use TanStack Query mutation:
            // await createTodoMutation.mutateAsync(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to add todo');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateTodo = async (id: string, data: CreateTodoData) => {
        try {
            setLoading(true);
            setError(null);
            updateTodo(id, data);
            // In the future, this could use TanStack Query mutation:
            // await updateTodoMutation.mutateAsync({ id, data });
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to update todo'
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTodo = async (id: string) => {
        try {
            setLoading(true);
            setError(null);
            deleteTodo(id);
            // In the future, this could use TanStack Query mutation:
            // await deleteTodoMutation.mutateAsync(id);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to delete todo'
            );
        } finally {
            setLoading(false);
        }
    };

    const handleToggleTodo = async (id: string) => {
        try {
            setLoading(true);
            setError(null);
            toggleTodo(id);
            // In the future, this could use TanStack Query mutation:
            // await toggleTodoMutation.mutateAsync(id);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to toggle todo'
            );
        } finally {
            setLoading(false);
        }
    };

    return {
        todos,
        isLoading,
        error,
        addTodo: handleAddTodo,
        updateTodo: handleUpdateTodo,
        deleteTodo: handleDeleteTodo,
        toggleTodo: handleToggleTodo,
    };
}
