import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/page-two")({
  component: PageTwo,
});

export default function PageTwo() {
  return (
    <div className="p-2">
      <h3>Page Two</h3>
    </div>
  );
}
