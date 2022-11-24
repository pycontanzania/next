import Link from "next/link";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import Newsletter from "./Newsletter";

//component
import { Socials, Events, Community } from "./Socials";

function Footer(props) {
  const router = useRouter();
  const { locale } = router;

  return (
    <footer className="mx-[6%]  font-base">
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-6 sm:gap-16 lg:gap-0">
        <div className="w-11/12 my-16 sm:my-0 lg:col-span-2">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            {locale === "en-US" ? "Disclaimer" : "Angalizo"}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {locale === "en-US"
              ? "PyCon Tanzania follows other"
              : "PyCon Tanzania inafuata"}
            <span className="mx-2">
              <Link href="https://pycon.org">
                <a
                  className="dark:text-blue-200 text-[#013DC4] hover:text-sky-500 font-medium"
                  aria-label="pycon.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {locale === "en-US"
                    ? "Python Conferences"
                    : "Mikutano mingine ya Python"}
                </a>
              </Link>
            </span>
            {locale === "en-US" ? " | Organized by the" : "| Imeandaliwa na"}
            <span className="mx-2">
              <Link href="https://mail.python.org/mailman3/lists/tanzania.python.org/">
                <a className="dark:text-blue-200 text-[#013DC4] hover:text-sky-500 font-medium">
                  {locale === "en-US"
                    ? "Python User Group"
                    : "Kikundi cha Watumiaji cha Python"}
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="my-16 sm:my-0 ">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            {locale === "en-US" ? "Our Community" : "Jumuiya Yetu"}
          </h1>
          <Community />
        </div>
        <div className="my-16 sm:my-0">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            {locale === "en-US" ? "Previous Events" : "Matukio ya awali"}
          </h1>
          <Events />
        </div>
        <Newsletter />
      </div>

      <div className="flex flex-col mt-16 mb-4 gap-y-8 lg:flex-row lg:justify-between">
        <div className="sm:flex sm:justify-center">
          <Link className="text-lg font-light" href="/">
            <a>
              &copy; {locale === "en-US" ? "Made with " : "Imetengenezwa kwa "}<FaHeart className="text-red-600 inline" /> 
              {locale === "en-US" ? "by Pycon Tanzania Community" : "na Jumuiya ya Pycon Tanzania"}
            </a>
          </Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
