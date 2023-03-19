import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="debug flex flex-col gap-1">
      <Link href="/references">Reference List</Link>
      <Link href="/guide">Contributing Guide</Link>
    </nav>
  );
};

export default Navbar;
