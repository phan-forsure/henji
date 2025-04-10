"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Bar() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="bar w-full p-3 mb-4 flex flex-wrap gap-2 items-center">
      <form
        className="flex items-center gap-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <Input
          className="w-full"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 rounded-md bar-button transition-all cursor-pointer"
          onClick={handleSearch}
        >
          <Search />
        </button>
      </form>
    </div>
  );
}
