import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TodoList",
  description: "Show Your Todo List",
};

export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="flex justify-between p-6 bg-blue-400">
        <div className="font-bold text-xl">Todo App</div>
      </header>
      {children}
    </div>
  );
}
