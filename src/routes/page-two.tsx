import { createFileRoute } from "@tanstack/react-router";
import { FaDisplay } from "react-icons/fa6";

export const Route = createFileRoute("/page-two")({
  component: PageTwo,
});

export default function PageTwo() {
  return (
    <div className="flex flex-col items-center">
      <h3>Page Two</h3>
      <br />
      <FaDisplay className="h-16 w-16" />
    </div>
  );
}
