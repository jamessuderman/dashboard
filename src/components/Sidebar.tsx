import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <div className="h-screen w-52 border-r-2 flex flex-col items-center justify-center py-2.5 gap-2.5">
      <Link to="/" className="[&.active]:font-bold hover:text-blue-500">
        Home
      </Link>{" "}
      <Link to="/page-one" className="[&.active]:font-bold hover:text-blue-500">
        Page One
      </Link>
      <Link to="/page-two" className="[&.active]:font-bold hover:text-blue-500">
        Page Two
      </Link>
    </div>
  );
}
