import Timeline from "./Timeline";

function Tabs(props) {
    return (
      <>
        <ul className="my-10 md:my-5 flex flex-wrap gap-4 justify-center md:justify-between text-lg font-base font-medium text-center text-green-500">
            <li className="mr-2">
                <a href="#" className="inline-block py-3 px-6 text-white bg-green-600  active" aria-current="page">
                    Day 1 - 5<sup>th</sup> Dec 2022
                </a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                    Day 2 - 6<sup>th</sup> Dec 2022
                </a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block py-3 px-6 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                    Day 3 - 7<sup>th</sup> Dec 2022
                </a>
            </li>
        </ul>

         <Timeline/>
      </>
    );
}

export default Tabs;