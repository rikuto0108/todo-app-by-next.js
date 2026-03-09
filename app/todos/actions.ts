import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export async function addTodo(formData: FormData) {
  "use server"
  const todoItem = formData.get("todoItem") as string;
  if (!todoItem || typeof todoItem !== "string") {
    return;
  }
  await prisma.todo.create({
    data: {
      task: todoItem
    }
  })
  redirect("/todos");
}