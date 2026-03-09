import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  if (typeof id !== "number") {
    return NextResponse.json({error: "Invalid data", status: 400});
  }
  await prisma.todo.delete({
    where: {
      id: id
    }
  })
  return NextResponse.json({success: true});
} 