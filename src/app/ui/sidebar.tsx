"use client";
import { Compass, Dock, Moon, PenBox, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.setAttribute("dark", `${dark}`);
  }, [dark]);

  useEffect(() => {
    function myFunction(x: MediaQueryList) {
      if (x.matches) {
      }
    }

    let x = window.matchMedia("(max-width: 700px)");

    myFunction(x);

    x.addEventListener("change", function () {
      myFunction(x);
    });
  }, []);

  return (
    <nav className="sidebar m-4 justify-between p-4 flex flex-wrap items-center flex-col max-sm:flex-row max-sm:py-0 max-sm:mb-0 ">
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

      <div
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
      </div>
    </nav>
  );
}
