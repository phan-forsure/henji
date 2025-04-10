"use client";
import { Compass, Dock, Moon, PenBox, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="sidebar m-4 max-sm:mx-2 justify-between p-4 flex flex-wrap items-center flex-col max-sm:flex-row max-sm:py-0 max-sm:mb-0 ">
      <div className="max-sm:flex">
        <Link href={"/search"}>
          <div className="flex sidebar-button">
            <Compass /> <span className="px-2">Search</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex sidebar-button">
            <Dock /> <span className="px-2">Posts</span>
          </div>
        </Link>
        <Link href={"/post"}>
          <div className="flex sidebar-button">
            <PenBox /> <span className="px-2">Write</span>
          </div>
        </Link>
      </div>

      <button
        className="flex sidebar-button cursor-pointer"
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? (
          <>
            <Sun /> <span className="px-2">Light mode</span>
          </>
        ) : (
          <>
            <Moon /> <span className="px-2">Dark mode</span>
          </>
        )}
      </button>
    </nav>
  );
}
