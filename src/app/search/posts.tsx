import { fetchSearchPosts } from "../lib/data";
import Post from "../ui/post";

export default async function SearchPosts({ query }: { query: string }) {
  const posts = await fetchSearchPosts(query);

  return (
    <div className="p-3">
      {posts.length == 0 && (
        <h1 className="text-3xl w-full h-full flex text-center items-center justify-center px-16 max-sm:px-4">
          No posts were found. Try something else!
        </h1>
      )}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.post_title}
          author={post.post_author}
          text={post.post_text}
          date={post.created_at.toString().slice(0, 15)}
          commentCount={post.comments_count}
        />
      ))}
    </div>
  );
}
