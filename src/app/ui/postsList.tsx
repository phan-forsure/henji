import { fetchPosts } from "../lib/data";
import Post from "./post";

export default async function PostsList() {
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
