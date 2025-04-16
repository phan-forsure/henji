"use server";

import { z, ZodAny, ZodError } from "zod";
import { writeComment, writePost } from "./data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const FormSchema = z.object({
  id: z.string(),
  author: z.string(),
  title: z.string(),
  text: z.string(),
  date: z.string(),
  image: z.optional(z.instanceof(File)),
});

const CreatePost = FormSchema.omit({ id: true, date: true })
  .refine(
    (data) =>
      data.author.trim() !== "" &&
      data.title.trim() !== "" &&
      data.text.trim() !== "",
    {
      message: "Fields cannot be empty",
    }
  )
  .refine(
    (data) => {
      // console.log(data.image?.type);
      // console.log(
      //   ["image/png", "image/jpg", "image/jpeg", ""].includes(
      //     data.image?.type || ""
      //   )
      // );
      return [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "application/octet-stream",
      ].includes(data.image?.type!);
    },
    {
      message: "Invalid image type",
    }
  );

export async function postCreate(prevState: any, formData: FormData) {
  try {
    const { author, title, text, image } = CreatePost.parse({
      author: formData.get("postAuthor"),
      title: formData.get("postTitle"),
      text: formData.get("postText"),
      image: formData.get("postImage"),
    });

    // console.log(image);
    // console.log(image instanceof File);
    // console.log(image?.name);
    // not undefined (image available) nor name is undefined
    if (image instanceof File) {
      if (image.name != "undefined") {
        const sanitized = image.name
          .replace(/[^a-zA-Z0-9.-]/g, "_") // Replace special chars with underscore
          .replace(/\s+/g, "_");
        const { data, error } = await supabase.storage
          .from("images")
          .upload(sanitized, image);

        if (error) {
          console.log(error);
        }

        await writePost(title, author, text, sanitized);
      } else {
        await writePost(title, author, text, null);
      }
    } else {
      await writePost(title, author, text, null);
    }
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      return {
        success: false,
        message: JSON.stringify(error?.issues[0].message),
      };
    }
  }
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

export async function commentCreate(
  prevState: { success: boolean; error: string },
  formData: FormData,
  id: string
): Promise<{ success: boolean; error: string }> {
  try {
    const { text } = CreateComment.parse({
      text: formData.get("commentText"),
    });
    await writeComment(text, id);
  } catch (error) {
    return { success: false, error: "Comment cannot be empty" };
  }
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}
