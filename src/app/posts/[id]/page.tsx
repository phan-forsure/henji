import Post from "@/app/posts/[id]/post";
import { Suspense } from "react";
import Loading from "@/app/posts/[id]/loading";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 h-full">
        <Suspense fallback={<Loading />}>
          <Post id={id} />
        </Suspense>
      </div>
    </main>
  );
}
