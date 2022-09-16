import Link from "next/link";
function Jumbotron(props) {
  return (
    <div className="mb-20">
      <div className="p-16 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-8 sm:mb-2 text-4xl font-bold font-base text-gray-900 dark:text-white">
          Covid-19 Travel Advice
        </h5>
        <p className="mb-5 text-xl font-semibold font-base text-gray-500 sm:text-lg dark:text-gray-400">
          Please read the following resources to get more information about
          vaccine & test
        </p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-base font-bold font-base text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <Link href='/covid-19'> Covid-19 Guidelines</Link>
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
