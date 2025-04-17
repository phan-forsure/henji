import { Suspense } from "react";
import PostsList from "./postsList";
import Loading from "./ui/loading";
import Spinner from "./ui/spinner";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <div className="content px-8 p-2 md:pt-8 max-sm:pt-2 max-sm:px-4">
        <div className="posts overflow-y-scroll h-full max-sm:h-full pb-8">
          <Suspense
            fallback={
              <div className="h-full flex justify-center items-center">
                <Spinner />
              </div>
            }
          >
            <PostsList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
