import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import USAFlag from "../../../public/img/usa.png";
import TZFlag from "../../../public/img/tz.png";
import Image from "next/image";

function Languages(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const { locales, locale } = router;

  return (
    <div className="px-3 hidden lg:block">
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex items-center justify-center p-2 text-xs font-medium font-base rounded cursor-pointer text-gray-700 dark:text-gray-100  hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:hover:text-white"
      >
        <Image
          src={locale === "en-US" ? USAFlag : TZFlag}
          alt={locale}
          width={20}
          height={20}
        />
        <span className="ml-2"> {locale === "en-US" ? "English (US)" : "Swahili (TZ)"}</span>
       
      </button>

      {dropdownOpen && (
        <div className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
          <ul className="py-1">
            {locales.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="block px-4 py-2 text-sm font-base text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center ">
                      <Image
                        src={locale === "en-US" ? USAFlag : TZFlag}
                        alt={locale}
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">{locale}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LanguagesSm({ open, setOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const { locales, locale } = router;

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex items-center justify-center p-2 text-sm font-base font-medium rounded cursor-pointer text-gray-700 dark:text-gray-100  hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:hover:text-white"
      >
        <Image
          src={locale === "en-US" ? USAFlag : TZFlag}
          alt={locale}
          width={20}
          height={20}
        />
         <span className="ml-2"> {locale === "en-US" ? "English (US)" : "Swahili (TZ)"}</span>
      </button>

      {dropdownOpen && (
        <div className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
          <ul className="py-1">
            {locales.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleClick}
                  >
                    <div className="inline-flex items-center">
                      <Image
                        src={locale === "en-US" ? USAFlag : TZFlag}
                        alt={locale}
                        width={20}
                        height={20}
                      />
                       <span className="ml-2">{locale}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export { Languages, LanguagesSm };
