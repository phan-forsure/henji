"use client";

import { useActionState, useState } from "react";
import { postCreate } from "../lib/actions";
import { AlertDestructive } from "../ui/alert";
export const dynamic = "force-dynamic";

const initialState = {
  message: "",
};

export default function Write() {
  const [state, formAction, pending] = useActionState(postCreate, initialState);

  return (
    <>
      <div className="content px-8 p-2 pt-8 h-full">
        <div className="posts overflow-y-scroll h-full">
          <form className="max-w-2xl mx-auto mt-8" action={formAction}>
            <div className="space-y-4">
              <input
                name="postAuthor"
                type="text"
                placeholder="Author name"
                className="w-full p-3 border border-accent focus:outline-none text-accent-foreground"
              />
              <input
                name="postTitle"
                type="text"
                placeholder="Post title"
                className="w-full p-3 border border-accent focus:outline-none text-accent-foreground"
              />
              <textarea
                name="postText"
                className="w-full h-64 p-4 border border-accent focus:outline-none outline-none resize-none text-accent-foreground"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <input
                value={"Post"}
                type="submit"
                className="px-6 py-2 bg-accent text-accent-foreground focus:outline-none focus:ring-offset-2 cursor-pointer"
              ></input>
              {pending && <p>Posting...</p>}
            </div>
            {state.message != "" && <AlertDestructive text={state.message} />}
          </form>
        </div>
      </div>
    </>
  );
}
