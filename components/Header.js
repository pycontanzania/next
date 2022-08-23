import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

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

  if (!mounted) return null;

  return (
    <>
      <header className="mx-[6%] my-8 flex flex-wrap justify-between">
        <div>
          <Link href="/">
            <a className="font-fancy text-xl">PyconTz</a>
          </Link>
        </div>
        <nav className="hidden sm:flex gap-x-8 font-base font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <a className="capitalize">{link.name}</a>
            </Link>
          ))}
        </nav>
        <div className="flex gap-x-4">
          <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </span>
          <span
            className="inline-block sm:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </span>
        </div>
      </header>

      {/* Dropdown Menu */}
      {open && (
        <header className="fixed inset-0 z-10 bg-gray-100 dark:bg-slate-700 overflow-y-auto drop-shadow-xl">
          <div className="mx-[6%] my-8 flex justify-between">
            <Link href="/">
              <a className="font-fancy text-xl">PyconTz</a>
            </Link>
            <div>
              <span
                className="inline-block sm:hidden"
                onClick={() => setOpen(!open)}
              >
                <FiX />
              </span>
            </div>
          </div>
          <nav className="mx-[6%] my-16 h-full w-1/2 flex flex-col space-y-8 font-base font-semibold">
            {navLinks.map((link) => (
              <Link  key={link.name}  href={link.path}>
                <a className="capitalize">{link.name}</a>
              </Link>
            ))}
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
