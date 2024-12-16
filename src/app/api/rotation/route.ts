import { getChampionRotation } from "@/utils/riotApi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const data = await getChampionRotation()
    return NextResponse.json(data)
}