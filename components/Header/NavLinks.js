import Link from "next/link";

const navLinks = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "speak",
    path: "/speak",
  },
  {
    name: "timetable",
    path: "/timetable",
  },
  {
    name: "sponsors",
    path: "/sponsors",
  },
  {
    name: "report",
    path: "/report",
  },
  {
    name: "code of conduct",
    path: "/coc",
  },
];

function NavLinksLg(props) {
  return (
    <nav className="hidden lg:flex gap-x-8 font-base font-semibold">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.path}>
          <a className="capitalize">{link.name}</a>
        </Link>
      ))}
    </nav>
  );
}

function NavLinks() {
  return (
    <nav className="mx-[6%] my-16 h-full w-1/2 flex flex-col space-y-8 font-base font-semibold">
      {navLinks.map((link) => (
        <Link key={link.name} href={link.path}>
          <a className="capitalize">{link.name}</a>
        </Link>
      ))}
    </nav>
  );
}

export { NavLinksLg, NavLinks };
