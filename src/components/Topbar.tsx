import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Switch } from "./ui/switch";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

export default function Topbar() {
  const [switched, setSwitched] = useState(false);
  const { setTheme } = useTheme();

  function switchTheme() {
    if (switched) {
      setSwitched(false);
      setTheme("light");
    } else {
      setSwitched(true);
      setTheme("dark");
    }
  }

  return (
    <div className="w-full h-16 px-2.5 border-b-2 flex items-center justify-between">
      {new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
      <Switch
        checked={switched}
        onCheckedChange={switchTheme}
        icon={
          switched ? (
            <IoMoonSharp className="ml-0.5 mt-0.5" />
          ) : (
            <IoSunnySharp className="ml-0.5 mt-0.5" />
          )
        }
      />
    </div>
  );
}
