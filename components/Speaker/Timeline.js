import Ticket from "./Ticket";
import useTranslation from "next-translate/useTranslation";

const calenderSVG = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-green-600 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

function Timeline(props) {
  const { t, lang } = useTranslation("speak");
  return (
    <aside className="">
      <h1 className="font-bold text-2xl my-4">{t("timeline_title")}</h1>
      <div className="h-max md:my-8 p-8 py-16 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {t("schedule_1")}
             
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              October 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {t("schedule_1_desc")}
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {t("schedule_2")}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 7th, 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {t("schedule_2_desc")}
            </p>
          </li>
          <li className="ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {t("schedule_3")}
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3">
                {lang === 'en-US' ? 'Latest':'Karibuni'}
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 8th, 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
             {t("schedule_3_desc")}
            </p>
          </li>
        </ol>
      </div>
      <Ticket />
    </aside>
  );
}

export default Timeline;
