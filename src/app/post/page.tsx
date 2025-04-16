"use client";

import { useActionState, useState } from "react";
import { postCreate } from "../lib/actions";
import { AlertDestructive } from "../ui/alert";
import { Image, ImageDown } from "lucide-react";
import Spinner from "../ui/spinner";
export const dynamic = "force-dynamic";

const initialState = {
  message: "",
};

export default function Write() {
  const [state, formAction, pending] = useActionState(postCreate, initialState);
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <div className="content px-8 p-2 pt-8 h-full">
        <div className="posts overflow-y-scroll h-full">
          <form className="max-w-2xl mx-auto mt-8" action={formAction}>
            <div className="space-y-4">
              <input
                required
                name="postAuthor"
                type="text"
                placeholder="Author name"
                className="w-full p-3 border border-accent focus:outline-none text-accent-foreground"
              />
              <input
                required
                name="postTitle"
                type="text"
                placeholder="Post title"
                className="w-full p-3 border border-accent focus:outline-none text-accent-foreground"
              />
              <div className="text-accent-foreground p-4 border border-accent h-full">
                <textarea
                  required
                  name="postText"
                  className="w-full resize-none focus:outline-none outline-none h-48 pb-4"
                  placeholder="What's on your mind?"
                />
                {image && (
                  <img
                    alt=""
                    src={image}
                    className="w-full h-full py-4"
                  />
                )}
                <label htmlFor="postImage">
                  <ImageDown
                    size={30}
                    className="cursor-pointer opacity-40 hover:opacity-80 transition-all"
                    strokeWidth={1.5}
                  />
                </label>
                <input
                  type="file"
                  id="postImage"
                  name="postImage"
                  onChange={onImageChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 ">
              <input
                value={"Post"}
                type="submit"
                className="px-6 py-2 bg-accent text-accent-foreground focus:outline-none focus:ring-offset-2 cursor-pointer"
              ></input>
              {pending && <Spinner />}
            </div>
            {state.message != "" && <AlertDestructive text={state.message} />}
          </form>
        </div>
      </div>
    </>
  );
}
