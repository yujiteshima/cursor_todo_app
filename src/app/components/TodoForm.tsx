"use client";

import { useState } from "react";

interface TodoFormProps {
    onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="タスクを入力..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    追加
                </button>
            </div>
        </form>
    );
} 