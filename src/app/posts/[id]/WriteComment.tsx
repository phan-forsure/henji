"use client";

import { useActionState } from "react";
import { commentCreate } from "../../lib/actions";
import { AlertDestructive } from "@/app/ui/alert";

const initialState = {
  success: false,
  error: "",
};

export default function WriteComment({ id }: { id: string }) {
  const commentCreateWithId = (
    prevState: CommentFormState,
    formData: FormData
  ): CommentFormState | Promise<CommentFormState> =>
    commentCreate(prevState, formData, id);
  const [state, formAction, pending] = useActionState(
    commentCreateWithId,
    initialState
  );

  return (
    <div className="space-y-6">
      <form className="space-y-4" action={formAction}>
        <textarea
          name="commentText"
          placeholder="Write a comment..."
          className="w-full text-accent-foreground p-4 rounded-lg border border-accent-600 bg-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          rows={3}
        />
        <button
          type="submit"
          className="px-4 py-2 text-accent-foreground bg-accent transition-colors cursor-pointer"
        >
          Post Comment
        </button>
        {state.error && <AlertDestructive text={state.error} />}
        {pending && <p>Posting...</p>}
      </form>
    </div>
  );
}
