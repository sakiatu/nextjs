import { configController } from '@/app/api/config/controller'
import {NextResponse} from "next/server";

// export const GET = configController.getConfig

export async function POST(request: Request) {
  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: Request) {
  const res = await fetch(`https://muslimsalat.com/${request.headers.get('location')}/2.json?key=890c962fe1bc14e4cecf90f3067ba55f`);
  return NextResponse.json(await res.json(), { status: 200 });
}
