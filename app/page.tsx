import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white border-gray-800 rounded-xl flex flex-col items-center my-6 mx-60 p-20">
      <h1 className="text-2xl font-bold">TODO アプリ</h1>
      <Link href="/todos" className="underline hover:decoration-blue-300 hover:text-blue-300">TODO一覧へ</Link>
    </main>
  );
}
