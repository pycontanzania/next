const individual = [
  {
    id: 1,
    status: "included",
    name: "Chance to win Pycon Swags",
  },
  {
    id: 2,
    status: "included",
    name: "Attend conference for all days",
  },
  {
    id: 3,
    status: "included",
    name: "Snacks and food are covered",
  },
];

const bronze = [
  {
    status: "included",
    name: "Company logo added at PyConTZ website",
  },
  {
    status: "included",
    name: "2 free conference registrations",
  },
  {
    status: "excluded",
    name: "Speaking slot during the event",
  },
];

const silver = [
  {
    status: "included",
    name: "Company logo added at PyConTZ website",
  },
  {
    status: "included",
    name: "4 free conference registrations",
  },
  {
    status: "included",
    name: "Speaking slot during the event",
  },
];

const checkedSVG = () => {
  return (
    <svg
      aria-hidden="true"
      className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Check icon</title>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const uncheckedSVG = () => {
  return (
    <svg
      aria-hidden="true"
      className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Check icon</title>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};


function PricingCard(props) {
  return (
    <div className="my-16 grid  gap-x-16 gap-y-8 grid-cols-auto-fit">
       {/* INDIVIDUAL PLAN */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl uppercase font-medium text-gray-500 dark:text-gray-400">
          Individual plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
        </div>

        <ul role="list" className="my-7 space-y-5">
          {individual.map((item) =>
            item.status === "included" ? (
              <li key={item.id} className="flex space-x-3">
                {checkedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
              </li>
            ) : (
              <li className="flex space-x-3 line-through decoration-gray-500">
                {uncheckedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500">
                  {item.name}
                </span>
              </li>
            )
          )}
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Buy Tickets Now
        </button>
      </div>
         

         {/* BRONZE SPONSOR */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium uppercase text-gray-500 dark:text-gray-400">
          Bronze Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
        </div>

        <ul role="list" className="my-7 space-y-5">
        {bronze.map((item) =>
            item.status === "included" ? (
              <li key={item.id} className="flex space-x-3">
                {checkedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
              </li>
            ) : (
              <li className="flex space-x-3 line-through decoration-gray-500">
                {uncheckedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500">
                  {item.name}
                </span>
              </li>
            )
          )}
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>

      {/* SILVER PLAN */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium uppercase text-gray-500 dark:text-gray-400">
          Silver plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <ul role="list" className="my-7 space-y-5">
        {silver.map((item) =>
            item.status === "included" ? (
              <li key={item.id} className="flex space-x-3">
                {checkedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {item.name}
                </span>
              </li>
            ) : (
              <li className="flex space-x-3 line-through decoration-gray-500">
                {uncheckedSVG()}
                <span className="text-base font-normal leading-tight text-gray-500">
                  {item.name}
                </span>
              </li>
            )
          )}
        </ul>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
