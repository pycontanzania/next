import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Newsletter from "./Newsletter";

//component
import { Socials, Events, Community } from "./Socials";

function Footer(props) {
  return (
    <footer className="mx-[6%]  font-base">
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-6 sm:gap-16 lg:gap-0">
        <div className="w-11/12 my-16 sm:my-0 lg:col-span-2">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            PyCon Tanzania follows other
            <span className="mx-2">
              <Link href="https://pycon.org">
                <a
                  className="dark:text-blue-200 text-[#013DC4] hover:text-sky-500 font-medium"
                  aria-label="pycon.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Python Conferences
                </a>
              </Link>
            </span>
            | Organized by the
            <span className="mx-2">
              <Link href="https://mail.python.org/mailman3/lists/tanzania.python.org/">
                <a className="dark:text-blue-200 text-[#013DC4] hover:text-sky-500 font-medium">
                  Python User Group
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="my-16 sm:my-0 ">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            Our Community
          </h1>
          <Community />
        </div>
        <div className="my-16 sm:my-0">
          <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            Previous Events
          </h1>
          <Events />
        </div>
        <Newsletter />
      </div>

      <div className="flex flex-col mt-16 mb-4 gap-y-8 lg:flex-row lg:justify-between">
        <div className="sm:flex sm:justify-center">
          <Link className="text-lg font-light" href="/">
            <a>
              &copy; Made with <FaHeart className="text-red-600 inline" /> by
              Pycon Tanzania Community
            </a>
          </Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
