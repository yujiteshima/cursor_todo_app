"use client";

import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    // ローカルストレージからTodoを読み込む
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            try {
                // 日付文字列をDateオブジェクトに変換する処理を追加
                const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
                    ...todo,
                    createdAt: new Date(todo.createdAt)
                }));
                setTodos(parsedTodos);
            } catch (error) {
                console.error("Failed to parse todos from localStorage:", error);
            }
        }
    }, []);

    // Todoが変更されたらローカルストレージに保存
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // 新しいTodoを追加
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date(),
        };
        setTodos([newTodo, ...todos]);
    };

    // Todoの完了状態を切り替え
    const toggleComplete = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Todoを削除
    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <TodoForm onAdd={addTodo} />
            {todos.length === 0 ? (
                <p className="text-center text-gray-500">タスクがありません。新しいタスクを追加してください。</p>
            ) : (
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg font-medium text-gray-700">タスク一覧</h2>
                        <p className="text-sm text-gray-500">
                            {todos.length}個のタスク（{todos.filter((todo) => todo.completed).length}個完了）
                        </p>
                    </div>
                    <div>
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggleComplete={toggleComplete}
                                onDelete={deleteTodo}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 