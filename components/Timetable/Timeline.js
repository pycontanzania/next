import React from "react"
import { CSSTransition } from "react-transition-group";

const firstDay = [
  {
    id: 1,
    name: "Pre Morning Session",
    time: "08:00 - 09:00",
    details: "Secretariat Opening Session",
  },
  {
    id: 2,
    name: "PyCon Meetups",
    time: "09:00 - 12:00",
    details:
      "A few words of welcome from Leading Design Festival curator and host Andy Budd and an introduction to today's theme.",
  },
];

const secondDay = [
  {
    id: 1,
    name: "Pre Morning Session",
    time: "08:00 - 09:00",
    details: "Secretariat Opening Session",
    fas: "",
  },
  {
    id: 2,
    name: "Morning Session",
    time: "09:00 - 10:30",
    details: "Workshop on Fundamentals of Python and Data Science",
    fas: "Antony Mipawa & Noah",
  },
  {
    id: 3,
    name: "Break",
    time: "10:30",
    details: "",
    fas: "",
  },
  {
    id: 4,
    name: "Afternoon Session",
    time: "11:00 - 13:00",
    details: "Workshop on Data Science",
    fas: "Zephania Reuben & David David",
  },
  {
    id: 5,
    name: "Lunch",
    time: "13:00",
    details: "",
    fas: "",
  },
  {
    id: 6,
    name: "Afternoon Session",
    time: "13:30 - 14:00",
    details: "A session for introducing Beem Challenge",
    fas: "Zephania Reuben",
  },
  {
    id: 7,
    name: "Evening Session",
    time: "14:00 - 16:00",
    details: "Workshop on BlockChain",
    fas: " Eliya Masesa",
  },
];

const thirdDay = [
  {
    id: 1,
    name: "Pre Morning Session",
    time: "08:00 - 08:30",
    details: "Secretariat Opening Session",
    presentor: "",
    pr_expertise: "",
  },
  {
    id: 2,
    name: "Python Conference 2022 Keynote",
    time: "08:30",
    details: "",
    presentor: "Noah",
    pr_expertise: "",
  },
  {
    id: 3,
    name: "Deploying Scalable ML for Data Science",
    time: "09:00",
    details: "",
    presentor: "Antony Mipawa ",
    pr_expertise: "Junior Data Scientist",
  },
  {
    id: 4,
    name: "Break",
    time: "10:30",
    details: "",
    presentor: "",
    pr_expertise: "",
  },
  {
    id: 5,
    name: "Build your Career as a Data Scientist",
    time: "11:00 - 13:00",
    details: "",
    presentor: "Albert",
    pr_expertise: "Software Engineer",
  },
  {
    id: 6,
    name: "Lunch",
    time: "13:00",
    details: "",
    presentor: "",
    pr_expertise: "",
  },
  {
    id: 7,
    name: "Sentiment Analysis & Topic Modelling",
    time: "13:30 - 14:00",
    details: "",
    presentor: "Neema Rajabu",
    pr_expertise: "Assistant Lecturer",
  },
  {
    id: 8,
    name: "Introduction to BlockChain with Python",
    time: "14:00 - 16:00",
    details: "",
    presentor: " Eliya Masesa",
    pr_expertise: "Blockchain Developer",
  },
];

const iconSVG = () => {
  return (
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </span>
  );
};
function Timeline({ active }) {
  const nodeRef = React.useRef(null)
  return (
    <div className="m-8 md:m-24 md:mb-36">
      {/* Day 1 */}
      <CSSTransition nodeRef={nodeRef} in={active === 1} timeout={500} classNames="slide-horizontal" exit={false} unmountOnExit>
        <ol ref={nodeRef} className="relative border-l font-base border-gray-200 dark:border-gray-700">
          {firstDay &&
            firstDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.details}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>

      {/* Day 2 */}
      <CSSTransition nodeRef={nodeRef}  in={active === 2} timeout={500} classNames="slide-horizontal" exit={false} unmountOnExit>
        <ol ref={nodeRef} className="relative border-l font-base border-gray-200 dark:border-gray-700">
          {secondDay &&
            secondDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p
                  className={`${
                    event.details === "" ? "hidden" : ""
                  } text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.details}
                </p>
                <p
                  className={`${
                    event.fas === "" ? "hidden" : ""
                  } my-2 text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  <strong>Facilitators</strong> - {event.fas}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>

      {/* Day 3*/}
      <CSSTransition nodeRef={nodeRef}  in={active === 3} timeout={500} classNames="slide-horizontal" exit={false} unmountOnExit>
        <ol ref={nodeRef} className="relative border-l font-base border-gray-200 dark:border-gray-700">
          {thirdDay &&
            thirdDay.map((event) => (
              <li key={event.id} className="mb-10 ml-10">
                {iconSVG()}
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {event.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {event.time}
                </time>
                <p
                  className={`${
                    event.details === "" ? "hidden" : ""
                  } text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.details}
                </p>
                <p
                  className={`${
                    event.presentor === "" ? "hidden" : ""
                  } my-2 text-base font-normal text-gray-500 dark:text-gray-400`}
                >
                  {event.presentor} - {event.pr_expertise}
                </p>
              </li>
            ))}
        </ol>
      </CSSTransition>
    </div>
  );
}

export default Timeline;
