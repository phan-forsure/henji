import { Suspense } from "react";
import { fetchPosts } from "./lib/data";
import Bar from "./ui/bar";
import Post from "./ui/post";

export default async function Home() {
  const posts = await fetchPosts();
  console.log(posts);
  return (
    <>
      <div className="content px-8 p-2">
        <div>
          <Bar />
        </div>
          <div className="posts overflow-y-scroll h-full">
          <Suspense fallback={<h1>Loading...</h1>}>
            {posts.length == 0 && <h1>No posts available</h1>}
            {posts.map((post) => (
              <Post
                key={post.id}
                title={post.post_title}
                author={post.post_author}
                text={post.post_text}
                date={post.created_at.toString()}
              />
            ))}
          </Suspense>
          </div>
      </div>
    </>
  );
}
