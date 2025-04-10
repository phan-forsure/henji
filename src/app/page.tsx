import { Suspense } from "react";
import { fetchPosts } from "./lib/data";
import Post from "./ui/post";
import Loading from "./ui/loading";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function PostsList() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.length == 0 && (
        <h1 className="text-3xl w-full h-full flex text-center items-center justify-center px-16">
          No posts available at the moment
        </h1>
      )}
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.post_title}
          author={post.post_author}
          text={post.post_text}
          date={post.created_at.toString().slice(0, 15)}
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="content px-8 p-2 md:pt-8 max-sm:pt-2 max-sm:px-4 mb-12">
        <div className="posts overflow-y-scroll h-full max-sm:h-[85%] pb-8">
          <Suspense fallback={<Loading />}>
            <PostsList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
