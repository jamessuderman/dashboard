import { useState } from "react";
import { useTheme } from "./components/theme-provider";
import Sidebar from "./components/Sidebar.tsx";
import { notifications } from "./data/bootstrap-data";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Switch } from "./components/ui/switch";

type CardProps = React.ComponentProps<typeof Card>;

export default function App({ className, ...props }: CardProps) {
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
    <div className="w-screen h-screen flex justify-start items-start">
      <Sidebar />
      <>
        <Card className={cn("w-[380px]", className)} {...props}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellIcon />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch checked={switched} onCheckedChange={switchTheme} />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </>
    </div>
  );
}
