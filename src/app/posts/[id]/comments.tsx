import { fetchComments } from "@/app/lib/data";
import Comment from "@/app/ui/comment";

export default async function CommentComponent({ id }: { id: string }) {
  const comments = await fetchComments(id);

  return (
    <div className="space-y-4 mt-12">
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.comment_text} date={comment.created_at} />
      ))}
    </div>
  );
}
