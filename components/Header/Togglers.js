import { useTheme } from "next-themes";

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
function ThemeToggler({open, setOpen}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-x-4">
      <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
      <span className="inline-block sm:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </span>
    </div>
  );
}

function MenuToggler({open, setOpen}) {

  return (
    <div>
      <span className="inline-block sm:hidden" onClick={() => setOpen(!open)}>
        <FiX />
      </span>
    </div>
  );
}

export {ThemeToggler, MenuToggler};
