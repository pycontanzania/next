import Carousel from "./Carousel";
import useTranslation from "next-translate/useTranslation";

function Hero({ gallery, year }) {
  const { t, lang } = useTranslation("home");

  const renderOrdinalNumber = (yr) => {
    switch (yr) {
      case "2019":
        return lang === "en-US" ? "1st" : "1";
      case "2020":
        return lang === "en-US" ? "2nd" : "2";
      case "2021":
        return lang === "en-US" ? "3rd" : "3";
      case "2022":
        return lang === "en-US" ? "4th" : "4";
      default:
        return;
    }
  };

  return (
    <section className="my-14 md:my-20 grid md:grid-cols-2">
      <div className="self-center text-content">
        <h1 className="uppercase font-bold font-base dark:text-green-400 text-green-800 tracking-wide">
          {t("greeting")}
        </h1>
        <h2 className="capitalize text-5xl font-bold font-base text-gray-700 dark:text-gray-200 w-4/5 my-8 md:my-12 md:mb-8">
          {t("pre-title")}
          <span className="dark:text-green-400 text-green-800">
            {renderOrdinalNumber(year)}
          </span>{" "}
          {t("post-title")}
        </h2>
        <p className="font-base text-gray-700 dark:text-gray-300 text-lg w-11/12">
          {t("intro")}
        </p>

        {/* CTA's */}
        {year === "2022" && (
          <div className="my-8 flex gap-4 flex-wrap">
            <button className="font-base bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-6 rounded">
              {t("btn1")}
            </button>
            <button className="font-base bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              {t("btn2")}
            </button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="hidden md:block">
        <Carousel gallery={gallery} />
      </div>
    </section>
  );
}

export default Hero;
