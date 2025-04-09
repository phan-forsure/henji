"use client";

import { writePost } from "../lib/data";
import { useState } from "react";

export default function Write() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div className="content px-8 p-2 pt-8">
        <div className="posts overflow-y-scroll h-full">
          <div className="max-w-2xl mx-auto mt-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Author name"
                className="w-full p-3 border border-gray-300 focus:outline-none"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <input
                type="text"
                placeholder="Post title"
                className="w-full p-3 border border-gray-300 focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="w-full h-64 p-4 border border-gray-300 focus:outline-none outline-none resize-none"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button
              className="mt-4 px-6 py-2 bg-black text-white hover:bg-neutral-900 focus:outline-none focus:ring-offset-2 cursor-pointer"
              onClick={async () => {
                try {
                  const response = await fetch("/api/posts", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ author, title, content }),
                  });

                  if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || "Failed to create post");
                  }

                  setAuthor("");
                  setTitle("");
                  setContent("");
                } catch (error) {
                  console.error("Error:", error);
                  alert("Failed to create post. Please try again.");
                }
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
