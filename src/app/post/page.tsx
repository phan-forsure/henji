"use client";

import { useState } from "react";
import { postCreate } from "../lib/actions";
export const dynamic = "force-dynamic";

export default function Write() {
  const [loading, setLoading] = useState(false);

  async function handlePost() {
    setLoading(true);
  }

  return (
    <>
      <div className="content px-8 p-2 pt-8 h-full">
        <div className="posts overflow-y-scroll h-full">
          <form className="max-w-2xl mx-auto mt-8" action={postCreate}>
            <div className="space-y-4">
              <input
                name="postAuthor"
                type="text"
                placeholder="Author name"
                className="w-full p-3 border border-gray-300 focus:outline-none text-accent-foreground"
              />
              <input
                name="postTitle"
                type="text"
                placeholder="Post title"
                className="w-full p-3 border border-gray-300 focus:outline-none text-accent-foreground"
              />
              <textarea
                name="postText"
                className="w-full h-64 p-4 border border-gray-300 focus:outline-none outline-none resize-none text-accent-foreground"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <input
                value={"Post"}
                type="submit"
                className="px-6 py-2 bg-black text-white hover:bg-neutral-900 focus:outline-none focus:ring-offset-2 cursor-pointer"
                onClick={async () => handlePost()}
              ></input>
              {loading && <p>Posting...</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
