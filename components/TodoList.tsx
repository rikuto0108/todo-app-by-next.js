import { prisma } from "@/app/lib/prisma"
import TodoItem from "./TodoItem";
import TodoDeleteButton from "./TodoDeleteButton";

export type Todo = {
  id: number,
  task: string,
  completed: boolean
}

export default async function TodoList() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "asc"
    }
  });

  return (
    < >
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-between gap-4">
            <TodoItem todo={todo}/>
            <TodoDeleteButton todo={todo}/>
          </div>
        )
      })}
      <div className="text-lg">タスク数：<span className="font-bold">{todos.length}</span></div>
    </>
  )
}