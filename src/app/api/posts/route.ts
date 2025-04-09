import { writePost } from "../../lib/data";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("API route called");
  
  try {
    const body = await request.json();
    console.log("Request body:", body);
    
    const { author, title, content } = body;
    
    if (!author || !title || !content) {
      console.log("Missing fields:", { author, title, content });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Calling writePost with:", { title, author, content });
    await writePost(title, author, content);
    
    return NextResponse.json(
      { message: "Post created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
