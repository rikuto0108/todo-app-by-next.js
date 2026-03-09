"use client"

import { useState } from "react";
import { Todo } from "./TodoList";
import { useRouter } from "next/navigation";

export default function TodoDeleteButton( {todo}: {todo: Todo} ) {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const handleClick = async() => {
    setLoading(true);
    try {
      const res = await fetch("/api/todos/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: todo.id})
      })
      if (!res.ok) throw new Error("削除に失敗しました。");
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return <button className="bg-red-400 py-1 px-2 border rounded-xs" disabled={loading} onClick={handleClick}>削除</button>;
}