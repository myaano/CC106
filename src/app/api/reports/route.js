import { NextResponse } from "next/server";
import { createReportController } from "@/app/controller/reportContoller";
import { getReportsController } from "@/app/controller/reportContoller";

export async function POST(request) {
  try {
    const body = await request.json();

    const report = await createReportController(body);

    return NextResponse.json(
      { report }, 
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create report' }, 
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const reports = await getReportsController();
    return NextResponse.json({ reports });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reports' }, 
      { status: 500 }
    );
  }
}