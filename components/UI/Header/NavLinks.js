import Link from "next/link";
import { useRouter } from "next/router";
import { LanguagesSm } from "./Languages";

function NavLinksLg(props) {
  const router = useRouter();
  const { eventYear } = router.query;
  const { locale } = router;

  const navLinks = [
    {
      name: `${locale === 'en-US' ? 'about': 'kutuhusu'}` ,
      path: "/about",
    },
    {
      name: `${locale === 'en-US' ? 'speak': 'zungumza'}`,
      path: "/speaker",
    },
    {
      name:`${locale === 'en-US' ? 'timetable': 'ratiba'}`,
      path: "/timetable",
    },
    {
      name:`${locale === 'en-US' ? 'sponsors': 'wafadhili'}`,
      path: "/sponsors",
    },
    {
      name:`${locale === 'en-US' ? 'report': 'ripoti'}`,
      path: `/reports/report-${eventYear}.pdf`,
    },
    {
      name:`${locale === 'en-US' ? 'code of conduct': 'kanuni za maadili'}`,
      path: "/coc",
    },
  ];

  let filteredLinks;
  if (!eventYear || eventYear === "2020" || eventYear === "2019") {
    filteredLinks = navLinks.filter((link) => locale=== 'en-US' && link.name !== "report" ||locale=== 'sw-TZ' && link.name !== "ripoti" );
  } else {
    filteredLinks = navLinks;
  }

  return (
    <nav className="hidden lg:flex gap-x-8 font-base font-semibold">
      {filteredLinks.map((link) => {
        if (link.name === "report" || link.name === "ripoti"  ) {
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
  const { locale } = router;

  const navLinks = [
    {
      name: `${locale === 'en-US' ? 'about': 'kutuhusu'}` ,
      path: "/about",
    },
    {
      name: `${locale === 'en-US' ? 'speak': 'zungumza'}`,
      path: "/speaker",
    },
    {
      name:`${locale === 'en-US' ? 'timetable': 'ratiba'}`,
      path: "/timetable",
    },
    {
      name:`${locale === 'en-US' ? 'sponsors': 'wafadhili'}`,
      path: "/sponsors",
    },
    {
      name:`${locale === 'en-US' ? 'report': 'ripoti'}`,
      path: `/reports/report-${eventYear}.pdf`,
    },
    {
      name:`${locale === 'en-US' ? 'code of conduct': 'kanuni za maadili'}`,
      path: "/coc",
    },
  ];

  let filteredLinks;

  if (!eventYear || eventYear === "2020" || eventYear === "2019") {
    filteredLinks = navLinks.filter((link) => locale=== 'en-US' && link.name !== "report" ||locale=== 'sw-TZ' && link.name !== "ripoti" );
  } else {
    filteredLinks = navLinks;
  }

  return (
    <nav className="mx-[6%] my-16 h-full w-1/2 flex flex-col space-y-8 font-base font-semibold">
      {filteredLinks.map((link) => {
        if (link.name === "report"|| link.name=== "ripoti") {
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
          <Link key={link.name} href={link.path}>
            <a className="capitalize" onClick={() => setOpen(!open)}>
              {link.name}
            </a>
          </Link>
        );
      })}

      <LanguagesSm open={open} setOpen={setOpen} />
    </nav>
  );
}

export { NavLinksLg, NavLinks };
