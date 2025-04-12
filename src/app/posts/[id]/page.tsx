import { fetchPost } from "@/app/lib/data";
import Post from "@/app/posts/[id]/post";
import Comments from "./comments";
import { Suspense } from "react";
import Loading from "@/app/posts/[id]/loading";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="py-12 max-sm:py-4 overflow-y-scroll max-sm:h-[80vh]">
      <Suspense fallback={<Loading />}>
        <Post id={id} />
      </Suspense>
      <Comments />
    </main>
  );
}
