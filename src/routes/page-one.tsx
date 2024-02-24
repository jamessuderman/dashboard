import { createFileRoute } from "@tanstack/react-router";
import { FaReact } from "react-icons/fa6";

export const Route = createFileRoute("/page-one")({
  component: PageOne,
});

export default function PageOne() {
  return (
    <div className="flex flex-col items-center">
      <h3>Page One</h3>
      <br />
      <FaReact className="h-16 w-16" />
    </div>
  );
}
