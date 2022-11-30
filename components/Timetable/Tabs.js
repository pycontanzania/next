import { useState } from "react";
import Timeline from "./Timeline";
import useTranslation from "next-translate/useTranslation";

function Tabs(props) {
  const { lang } = useTranslation();
  const [active, setActive] = useState(1);

  const toggleActive = (index) => {
    setActive(index);
  };

  return (
    <>
      <ul className="my-10 md:my-5 flex flex-wrap gap-4 justify-center md:justify-between text-lg font-base font-medium text-center text-green-500">
        <li className="mr-2" onClick={() => toggleActive(1)}>
          <a
            href="#"
            className={
              active === 1
                ? "inline-block py-3 px-6 text-white bg-green-600"
                : "inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
            aria-current="page"
          >
            {lang === 'en-US' ? 'Day 1': 'Siku ya 1'} - 5<sup>th</sup> Dec 2022
          </a>
        </li>
        <li className="mr-2" onClick={() => toggleActive(2)}>
          <a
            href="#"
            className={
              active === 2
                ? "inline-block py-3 px-6 text-white bg-green-600"
                : "inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          >
             {lang === 'en-US' ? 'Day 2': 'Siku ya 2'} - 6<sup>th</sup> Dec 2022
          </a>
        </li>
        <li className="mr-2" onClick={() => toggleActive(3)}>
          <a
            href="#"
            className={
              active === 3
                ? "inline-block py-3 px-6 text-white bg-green-600"
                : "inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          >
             {lang === 'en-US' ? 'Day 3': 'Siku ya 3'} - 7<sup>th</sup> Dec 2022
          </a>
        </li>
        <li className="mr-2" onClick={() => toggleActive(4)}>
          <a
            href="#"
            className={
              active === 4
                ? "inline-block py-3 px-6 text-white bg-green-600"
                : "inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          >
             {lang === 'en-US' ? 'Day 4': 'Siku ya 4'} - 8<sup>th</sup> Dec 2022
          </a>
        </li>
      </ul>

      <Timeline active={active} />
    </>
  );
}

export default Tabs;
