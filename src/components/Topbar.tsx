import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Switch } from "./ui/switch";

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
      Topbar
      <Switch checked={switched} onCheckedChange={switchTheme} />
    </div>
  );
}
