import Spinner from "@/app/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      {/* <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div> */}
      <Spinner />
    </div>
  );
}
