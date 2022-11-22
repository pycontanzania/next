import Link from "next/link";
import { useRouter } from "next/router";

function NavLinksLg(props) {
  const router = useRouter();
  const { eventYear } = router.query;
  
  const navLinks = [
    {
      name: "about",
      path: "/about",
    },
    {
      name: "speak",
      path: "/speaker",
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
      path: `/reports/report-${eventYear}.pdf`,
    },
    {
      name: "code of conduct",
      path: "/coc",
    },
  ];

  let filteredLinks;
  if (!eventYear || eventYear === "2020" || eventYear === "2019") {
    filteredLinks = navLinks.filter((link) => link.name !== "report");
  } else {
    filteredLinks = navLinks;
  }

  return (
    <nav className="hidden lg:flex gap-x-8 font-base font-semibold">
      {filteredLinks.map((link) => {
        if (link.name === "report") {
          return (
            <a key={link.name} className="capitalize" href={link.path} download>
              {link.name}
            </a>
          );
        }

        return (
          <Link key={link.name} href={link.path}>
            <a className="capitalize">{link.name}</a>
          </Link>
        );
      })}
    </nav>
  );
}

function NavLinks({ open, setOpen }) {
  const router = useRouter();
  const { eventYear } = router.query;

  const navLinks = [
    {
      name: "about",
      path: "/about",
    },
    {
      name: "speak",
      path: "/speaker",
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
      path: `/reports/report-${eventYear}.pdf`,
    },
    {
      name: "code of conduct",
      path: "/coc",
    },
  ];

  let filteredLinks;
 
  if (!eventYear || eventYear === "2020" || eventYear === "2019") {
    filteredLinks = navLinks.filter((link) => link.name !== "report");
  } else {
    filteredLinks = navLinks;
  }

  return (
    <nav className="mx-[6%] my-16 h-full w-1/2 flex flex-col space-y-8 font-base font-semibold">
      {filteredLinks.map((link) => {
        if (link.name === "report") {
          return (
            <a
              key={link.name}
              href={link.path}
              className="capitalize"
              download
              onClick={() => setOpen(!open)}
            >
              {link.name}
            </a>
          );
        }

        return (
          <Link key={link.name} href={link.path} onClick={() => setOpen(!open)}>
            <a className="capitalize">{link.name}</a>
          </Link>
        );
      })}
    </nav>
  );
}

export { NavLinksLg, NavLinks };
