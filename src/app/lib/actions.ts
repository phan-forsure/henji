"use server";

import { z } from "zod";
import { writeComment, writePost } from "./data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  id: z.string(),
  author: z.string(),
  title: z.string(),
  text: z.string(),
  date: z.string(),
});

const CreatePost = FormSchema.omit({ id: true, date: true }).refine(
  (data) =>
    data.author.trim() !== "" &&
    data.title.trim() !== "" &&
    data.text.trim() !== "",
  {
    message: "Fields cannot be empty",
  }
);

export async function postCreate(formData: FormData) {
  const { author, title, text } = CreatePost.parse({
    author: formData.get("postAuthor"),
    title: formData.get("postTitle"),
    text: formData.get("postText"),
  });

  await writePost(title, author, text);
  revalidatePath("/");
  redirect("/");
}

const CommentSchema = z.object({
  id: z.string(),
  text: z.string(),
  date: z.string(),
});

const CreateComment = CommentSchema.omit({ id: true, date: true }).refine(
  (data) => data.text.trim() !== "",
  {
    message: "Fields cannot be empty",
  }
);

export async function commentCreate(id: string, formData: FormData) {
  const { text } = CreateComment.parse({
    text: formData.get("commentText"),
  });

  await writeComment(text, id);
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`)
}
