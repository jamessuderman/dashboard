import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <div className="h-screen w-52 border-r-2 flex flex-col items-center justify-center py-2.5 gap-2.5">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/page-one" className="[&.active]:font-bold">
        Page One
      </Link>
      <Link to="/page-two" className="[&.active]:font-bold">
        About
      </Link>
    </div>
  );
}
