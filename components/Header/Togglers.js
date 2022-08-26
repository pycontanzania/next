import { useTheme } from "next-themes";

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
function ThemeToggler({open, setOpen}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-x-4">
      <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <FiMoon className="text-2xl" /> : <FiSun className="text-2xl"  />}
      </span>
      <span className="inline-block lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl"  />}
      </span>
    </div>
  );
}

function MenuToggler({open, setOpen}) {
  return (
    <div>
      <span className="inline-block lg:hidden" onClick={() => setOpen(!open)}>
        <FiX className="text-2xl"  />
      </span>
    </div>
  );
}

export {ThemeToggler, MenuToggler};
