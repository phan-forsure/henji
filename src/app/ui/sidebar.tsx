import { Compass, Moon, Search, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="sidebar m-2 justify-between p-4 rounded-md flex flex-wrap flex-col w-fit">
      <div>
        <div>
          <Compass />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Moon />
        </div>
      </div>

      <div className="settings">
        <Settings />
      </div>
    </nav>
  );
}
