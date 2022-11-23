import { useState, useEffect } from "react";

//Components
import { Logo, LogoSm } from "../Logo";
import { Languages } from "./Languages";
import { NavLinks, NavLinksLg } from "./NavLinks";
import { ThemeToggler, MenuToggler } from "./Togglers";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <header className="mx-[6%] my-8 flex flex-wrap justify-between items-center">
        <Logo />
        <NavLinksLg />
        <div className="flex">
          <Languages />
          <ThemeToggler open={open} setOpen={setOpen} />
        </div>
      </header>

      {/* Dropdown Menu */}
      {open && (
        <header className="fixed inset-0 z-10 bg-gray-100 dark:bg-gray-800 drop-shadow-xl">
          <div className="mx-[6%] my-8 flex justify-between">
            <LogoSm open={open} setOpen={setOpen} />
            <MenuToggler open={open} setOpen={setOpen} />
          </div>
          <NavLinks open={open} setOpen={setOpen} />
        </header>
      )}
    </>
  );
}

export default Header;
