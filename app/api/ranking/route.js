import { NextResponse } from "next/server";
import { ranking } from "@/data/ranking";

export async function GET() {
  return NextResponse.json(ranking);
}

