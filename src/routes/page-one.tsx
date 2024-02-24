import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/page-one")({
  component: PageOne,
});

export default function PageOne() {
  return (
    <div className="p-2">
      <h3>Page One</h3>
    </div>
  );
}
