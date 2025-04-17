import { Suspense } from "react";
import Bar from "../ui/bar";
import SearchPosts from "./posts";
import Spinner from "../ui/spinner";

export default async function Search(props: {
  searchParams: Promise<{
    search: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.search || "";

  return (
    <div className="content px-8 p-2 md:pt-8 max-sm:pt-2 max-sm:px-4 mb-12">
      <Bar />
      <div className="posts overflow-y-scroll h-full max-sm:h-[85%] pb-8">
        <Suspense fallback={<div className="h-full flex justify-center items-center"><Spinner /></div>}>
          <SearchPosts query={query} />
        </Suspense>
      </div>
    </div>
  );
}
