import { fetchSearchPosts } from "../lib/data";
import Post from "../ui/post";

export default async function SearchPosts({ query }: { query: string }) {
  const posts = await fetchSearchPosts(query);
  return (
    <div className="p-3">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.post_title}
          author={post.post_author}
          text={post.post_text}
          date={post.created_at.toString().slice(0, 15)}
        />
      ))}
    </div>
  );
}
