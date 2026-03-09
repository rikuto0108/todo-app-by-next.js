import TodoList from "@/components/TodoList";
import { addTodo } from "./actions";

export default function Page() {
  return (
    <main className="bg-white border-gray-800 rounded-xl flex flex-col items-center my-6 mx-60 p-20">
      <h1 className="text-2xl font-bold">TODO一覧</h1>
      <form action={addTodo} className="flex gap-4 p-4">
        <label htmlFor="todoItem">
          タスク：
          <input type="text" id="todoItem" name="todoItem" className="border p-1 rounded-xs border-gray-400"/>
        </label>
        <button type="submit" className="bg-blue-200 border-gray-400 rounded-xs px-2 py-1 cursor-pointer hover:bg-blue-400">追加</button>
      </form>
      <div className="flex flex-col gap-2">
        <TodoList />
      </div>
    </main>
  )
}