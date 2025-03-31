import Bar from "./ui/bar";
import Post from "./ui/post";

export default function Home() {
  return (
    <>
      <div className="content px-8 p-2">
        <div>
          <Bar />
        </div>
        <div className="posts overflow-y-scroll h-full">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
