import { commentCreate } from "../../lib/actions";

export default async function WriteComment({ id }: { id: string }) {
  const commentCreateWithId = commentCreate.bind(null, id);

  return (
    <div className="space-y-6">
      <form className="space-y-4" action={commentCreateWithId}>
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
      </form>
    </div>
  );
}
