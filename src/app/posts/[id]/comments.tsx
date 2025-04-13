import Comment from "@/app/ui/comment";

export default async function Comments() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-6">Comments</h3>
      <Comment />
    </div>
  );
}
