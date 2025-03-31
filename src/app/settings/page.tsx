import Bar from "@/app/ui/bar";
import Setting from "../ui/setting";

export default function Settings() {
  return (
    <>
      <div className="settings-page px-8 p-2 w-full">
        <div className="options overflow-y-scroll w-full">
          <Setting option="Show time" />
          <Setting option="Show author" />
          <Setting option="Show views" />
        </div>
      </div>
    </>
  );
}
