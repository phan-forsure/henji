import WriteComment from "@/app/posts/[id]/WriteComment";
import CommentComponent from "./comments";
import { Suspense } from "react";
import Loading from "./loading";

export default async function CommentSection({ id }: { id: string }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-6">Comments</h3>
      <WriteComment id={id} />
      <Suspense fallback={<Loading />}>
        <CommentComponent id={id} />
      </Suspense>
    </div>
  );
}
