"use client";
import { Compass, Dock, Moon, Settings, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.setAttribute("dark", `${dark}`);
  }, [dark]);
  return (
    <nav className="sidebar m-4 justify-between p-4 flex flex-wrap flex-col">
      <div>
        <div className="flex sidebar-button">
          <Compass /> <span className="px-2">Search</span>
        </div>
        <Link href={"/"}>
          <div className="flex sidebar-button">
            <Dock /> <span className="px-2">Posts</span>
          </div>
        </Link>
        <div className="flex sidebar-button" onClick={() => setDark(!dark)}>
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
      </div>

      <Link href={"settings"}>
        <div className="settings flex sidebar-button">
          <Settings /> <span className="px-2">Settings</span>
        </div>
      </Link>
    </nav>
  );
}
