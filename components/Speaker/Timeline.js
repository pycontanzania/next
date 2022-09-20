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
  return (
    <aside className="">
      <h1 className="font-bold text-2xl">Conference Timeline</h1>
      <div className="h-max md:my-8 p-8 py-16 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Call for Presentations
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              October 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Calling to volunteer speakers of all experience levels and
              backgrounds
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Final Accepting of Draft Presentations
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 7th, 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              We will start the review process as the proposals come in, and not
              at the end. Proposals submitted early will get more attention and
              feedback
            </p>
          </li>
          <li className="ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
              {calenderSVG()}
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Publishing of Accepted Speakers
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 8th, 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All speakers are expected to have read and adhere to the
              conference Code of Conduct. Take a look at the code of conduct,
              and be mindful of it. The gist is, avoid using sexist language.
            </p>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Timeline;
