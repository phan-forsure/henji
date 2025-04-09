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
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.post_title}
              author={post.post_author}
              text={post.post_text}
              date={post.created_at.toString()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
