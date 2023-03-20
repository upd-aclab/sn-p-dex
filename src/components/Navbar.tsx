import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      href: "/",
      name: "Homepage",
    },
    {
      href: "/references",
      name: "Reference List",
    },
    {
      href: "/guide",
      name: "Contributing Guide",
    },
  ];

  return (
    <nav className="flex flex-col">
      {links.map(({ href, name }, index) => (
        <Link
          className="border-b border-solid border-white px-10 py-2.5 hover:bg-white/20"
          href={href}
          key={index}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
