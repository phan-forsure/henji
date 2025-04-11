"use client";

import { useEffect } from "react";
import { AlertDestructive } from "../ui/alert";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  });
  return (
    <div className="content px-8 p-2 pt-8 h-full">
      <AlertDestructive />
      <button
        className="px-6 py-2 bg-black text-white hover:bg-neutral-900 focus:outline-none focus:ring-offset-2 cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
