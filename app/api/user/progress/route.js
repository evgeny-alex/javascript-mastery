import { NextResponse } from "next/server";
import { auth } from "@/libs/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    // Authenticate the user
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Parse the request body
    const { lessonCode, isCompleted } = await req.json();
    if (!lessonCode || typeof isCompleted !== "boolean") {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 },
      );
    }

    // Connect to the database
    await connectMongo();

    // Find the user in the database
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the user's progress
    const completedLessons = new Set(user.completedLessons);
    if (isCompleted) {
      completedLessons.add(lessonCode);
    } else {
      completedLessons.delete(lessonCode);
    }

    user.completedLessons = Array.from(completedLessons);
    user.progress = completedLessons.size;
    user.lastLessonCode = isCompleted ? lessonCode : user.lastLessonCode;

    await user.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update user progress:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    await connectMongo();
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      completedLessons: user.completedLessons || [],
      progress: user.progress || 0,
      lastLessonCode: user.lastLessonCode || null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
