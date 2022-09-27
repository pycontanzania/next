import { useState, useEffect } from "react";

//Components
import Logo from "../Logo";
import { NavLinks, NavLinksLg } from "./NavLinks";
import { ThemeToggler, MenuToggler } from "./Togglers";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <header className="mx-[6%] my-8 flex flex-wrap justify-between">
        <Logo />
        <NavLinksLg />
        <ThemeToggler open={open} setOpen={setOpen} />
      </header>

      {/* Dropdown Menu */}
      {open && (
        <header className="fixed inset-0 z-10 bg-gray-100 dark:bg-slate-700 drop-shadow-xl">
          <div className="mx-[6%] my-8 flex justify-between">
            <Logo />
            <MenuToggler open={open} setOpen={setOpen} />
          </div>
          <NavLinks />
        </header>
      )}
    </>
  );
}

export default Header;
