import { HiCalendar, HiLocationMarker } from "react-icons/hi";

function Hero(props) {
  return (
    <section>
      <h1 className="text-4xl font-bold font-base text-center">Pycon 2022</h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-20 grid lg:grid-cols-2 gap-16">
        <div className="aspect-w-16 aspect-h-9 mb-16">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4Elmrr3P_vo"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="font-base">
          <h1 className="text-4xl font-bold">Python Conference (Pycon)</h1>
          <p className="my-6 text-lg  text-gray-500  dark:text-gray-400">
            Is an annual gathering of Python programming language users in
            Tanzania which includes software developers, data scientists, data
            analysts & techies from various organisations. The conference is
            organised by members of the Python Tanzania Users Group, a community
            dedicated to advancing the use of the Python language and technology
            in Tanzania.
          </p>

          <h2 className="font-bold text-2xl">Pycon 2022</h2>
          <div className="my-4 flex flex-wrap items-center gap-4 sm:gap-16">
            <div className="flex items-center">
              <div className="my-4 mr-4 inline-flex items-center p-3  text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <HiCalendar className="w-6 h-6" />
              </div>
              <div className="font-base  text-gray-500  dark:text-gray-400">
                <h3>Date & Time</h3>
                <p>05 - 19 Dec 2022, 08:00 AM to 05:00PM</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="my-4 mr-4 inline-flex items-center p-3  text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div className="font-base  text-gray-500  dark:text-gray-400">
                <h3>Location</h3>
                <p>UDOM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
