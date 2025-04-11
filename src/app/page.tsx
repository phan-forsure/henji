import { Suspense } from "react";
import PostsList from "./ui/postsList";
import Loading from "./ui/loading";


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
