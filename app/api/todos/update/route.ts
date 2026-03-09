import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, completed } = await request.json();
  if (typeof id !== "number" || typeof completed !== "boolean") {
    return NextResponse.json({error: "Invalid data", status: 400});
  }
  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      completed: completed
    }
  })
  return NextResponse.json({success: true});
}