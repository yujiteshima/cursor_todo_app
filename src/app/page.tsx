import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="container p-4 mx-auto max-w-2xl">
      <header className="py-6 mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">Cursor Todo App</h1>
        <p className="text-gray-600">シンプルで使いやすいタスク管理アプリ</p>
      </header>
      <TodoList />
    </main>
  );
}
