import useTranslation from "next-translate/useTranslation";



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


function PricingCard({checked}) {

  const { t, lang } = useTranslation("sponsors");

  const individual = [
    {
      id: 1,
      status: "included",
      name:`${lang === 'en-US' ? "Chance to win Pycon Swags":"Nafasi ya kushinda Pycon Swags"}`
    },
    {
      id: 2,
      status: "included",
      name:`${lang === 'en-US' ? "Attend a conference for all days":"Hudhuria kongamano kwa siku zote"}`
    },
    {
      id: 3,
      status: "included",
      name:`${lang === 'en-US' ? "Snacks and food are covered":"Vitafunio na chakula vimelipiwa"}`
    },
  ];
  
  const bronze = [
    {
      id:1,
      status: "included",
      name:`${lang === 'en-US' ? "Company logo added at PyConTZ website":"Nembo ya kampuni kuongezwa kwenye tovuti ya PyConTZ"}`
    },
    {
      id:2,
      status: "included",
      name:`${lang === 'en-US' ? "2 free conference registrations":"Nafasi 2 za usajili kwenye mkutano bure"}`
    },
    {
      id:3,
      status: "excluded",
      name:`${lang === 'en-US' ? "Speaking slot during the event":"Nafasi ya kuzungumza wakati wa tukio"}`
    },
  ];
  
  const silver = [
    {
      id:1,
      status: "included",
      name:`${lang === 'en-US' ? "Company logo added at PyConTZ website":"Nembo ya kampuni kuongezwa kwenye tovuti ya PyConTZ"}`
    },
    {
      id:2,
      status: "included",
      name:`${lang === 'en-US' ? "4 free conference registrations":"Nafasi 4 za usajili kwenye mkutano bure"}`
    },
    {
      id:3,
      status: "included",
      name:`${lang === 'en-US' ? "Speaking slot during the event":"Nafasi ya kuzungumza wakati wa tukio"}`
    },
  ];
  return (
    <div className="my-16 grid  gap-x-16 gap-y-8 grid-cols-auto-fit">
       {/* INDIVIDUAL PLAN */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl uppercase text-center font-medium text-gray-500 dark:text-gray-400">
          { lang === 'en-US' ? 'Individual plan' :'Mpango wa mtu binafsi'}
        </h5>
        <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
          <span className={`text-xl font-semibold ${checked ? '': 'mr-2'}`}>{checked ? '$' : 'TZS' }</span>
          <span className="text-3xl font-extrabold tracking-tight">{checked ? '8.69': '20,273' }</span>
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
              <li key={item.id} className="flex space-x-3 line-through decoration-gray-500">
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
          {lang === 'en-US' ? 'Buy Tickets Now' : 'Nunua Tiketi Sasa'}
        </button>
      </div>
         

         {/* BRONZE SPONSOR */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl text-center font-medium uppercase text-gray-500 dark:text-gray-400">
        { lang === 'en-US' ? 'Bronze Plan' :'Mpango wa Shaba'}
        </h5>
        <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
          <span className={`text-xl font-semibold ${checked ? '': 'mr-2'}`}>{checked ? '$' : 'TZS' }</span>
          <span className="text-3xl font-extrabold tracking-tight">{checked ? '500': '1,166,455' }</span>
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
              <li key={item.id} className="flex space-x-3 line-through decoration-gray-500">
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
          {lang === 'en-US' ? 'Choose plan' : 'Chagua mpango'}
          
        </button>
      </div>

      {/* SILVER PLAN */}
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl text-center font-medium uppercase text-gray-500 dark:text-gray-400">
        { lang === 'en-US' ? 'Silver plan' :'Mpango wa fedha'}
          
        </h5>
        <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
          <span className={`text-xl font-semibold ${checked ? '': 'mr-2'}`}>{checked ? '$' : 'TZS' }</span>
          <span className="text-3xl font-extrabold tracking-tight">{checked ? '1,000': '2,332,910' }</span>
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
              <li key={item.id} className="flex space-x-3 line-through decoration-gray-500">
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
          {lang === 'en-US' ? 'Choose plan' : 'Chagua mpango'}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
