import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-4 my-2 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggleComplete(todo.id)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span
                    className={`text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-700"
                        }`}
                >
                    {todo.text}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                    {todo.createdAt.toLocaleDateString()}
                </span>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="p-1 text-red-500 bg-red-100 rounded-full hover:bg-red-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
} 