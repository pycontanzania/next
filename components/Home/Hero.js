import Carousel from "./Carousel";

function Hero({gallery, year}) {
 
  const renderOrdinalNumber = (yr) => {
    switch (yr) {
      case "2019":
        return "1st"
      case "2020":
        return "2nd"
      case "2021":
        return "3rd"
      case "2022":
        return "4th"
      default:
        return;
    }
  };

  return (
    <section className="my-14 md:my-20 grid md:grid-cols-2">
      <div className="self-center text-content">
        <h1 className="uppercase font-bold font-base dark:text-green-400 text-green-800 tracking-wide">
          Karibu Pycon Tanzania
        </h1>
        <h2 className="capitalize text-5xl font-bold font-base text-gray-700 dark:text-gray-200 w-4/5 my-8 md:my-12 md:mb-8">
          The <span className="dark:text-green-400 text-green-800">{renderOrdinalNumber(year)}</span> annual python language
          conference.
        </h2>
        <p className="font-base text-gray-700 dark:text-gray-300 text-lg w-11/12">
          For professionals, entrepreneurs, scientists and students in Tanzania,
          organized by the tech-community to foster collaboration and
          advancement of technology.
        </p>


        {/* CTA's */}
        { year === 2022 && (<div className="my-8 flex gap-4 flex-wrap">
          <button className="font-base bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-6 rounded">
            Buy Tickets
          </button>
          <button className="font-base bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Become A Sponsor
          </button>
        </div>)}
      </div>


      {/* Carousel */}
      <div className="hidden md:block">
          <Carousel gallery={gallery}/>
      </div>
    </section>
  );
}

export default Hero;
