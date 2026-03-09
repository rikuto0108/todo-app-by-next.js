"use client"

import dynamic from "next/dynamic";
import { useState } from "react"
import { Todo } from "./TodoList";

export default function TodoItem( {todo}: {todo: Todo} ) {
  const [ checked, setChecked ] = useState(todo.completed); 
  const [ loading, setLoading ] = useState(false); 
  const handleChange = async() => {
    const newChecked = !checked;
    setChecked(newChecked);
    setLoading(true);
    try {
      await fetch("/api/todos/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: todo.id, completed: newChecked})
      })
    } catch (err) {
      console.error(err);
      setChecked(!newChecked);
    } finally {
      setLoading(false);
    }
  }

  return(
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={checked} disabled={loading} onChange={handleChange}/>
      {todo.task}
    </label>
  )
}