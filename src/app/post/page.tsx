"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDestructive } from "../ui/alert";
export const dynamic = "force-dynamic";

export default function Write() {
  const router = useRouter();
  // set the post content to be sent to the backend
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // Error incase something goes wrong
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // reset input after posting/sending the request to simulate input
  function resetInput() {
    setAuthor("");
    setTitle("");
    setContent("");
  }

  async function handlePost() {
    resetInput();
    setError(false);

    try {
      setLoading(true);

      // send request with data to write to database
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, title, content }),
      });

      if (!response.ok) {
        setError(true);
        setLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }

      // refresh data to show new content
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="content px-8 p-2 pt-8">
        <div className="posts overflow-y-scroll h-full">
          <div className="max-w-2xl mx-auto mt-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Author name"
                className="w-full p-3 border border-gray-300 focus:outline-none text-accent-foreground"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <input
                type="text"
                placeholder="Post title"
                className="w-full p-3 border border-gray-300 focus:outline-none text-accent-foreground"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="w-full h-64 p-4 border border-gray-300 focus:outline-none outline-none resize-none text-accent-foreground"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <button
                className="px-6 py-2 bg-black text-white hover:bg-neutral-900 focus:outline-none focus:ring-offset-2 cursor-pointer"
                onClick={async () => handlePost()}
              >
                Post
              </button>
              {loading && <p>Posting...</p>}
            </div>
            {error && <AlertDestructive />}
          </div>
        </div>
      </div>
    </>
  );
}
