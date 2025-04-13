"use client";

import { AlertDestructive } from "@/app/ui/alert";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="content px-8 p-2 pt-8 h-full">
      <AlertDestructive text={`Comment field cannot be empty`} />
      <button
        className="px-6 py-2 bg-black text-white hover:bg-neutral-900 focus:outline-none focus:ring-offset-2 cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
