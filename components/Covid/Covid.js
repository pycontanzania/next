import Image from "next/image";

import ImageOne from "../../public/img/1.jpg";
import ImageTwo from "../../public/img/2.jpg";
import ImageThree from "../../public/img/3.jpg";

import useTranslation from "next-translate/useTranslation";

function Covid(props) {
  const { t, lang } = useTranslation("covid");
  return (
    <section className="my-8">
      <h1 className="text-4xl font-bold font-base text-center">{t("title")}</h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="grid mt-20 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
        <a
          href="https://www.moh.go.tz/en/covid-19-info"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read more about covid vaccination"
        >
          <div className="relative overflow-hidden font-base">
            <div className="image-wrapper">
              <Image
                src={ImageOne}
                alt="TravelAdvice_Image"
                className="opacity-70 dark:opacity:60 bg-gradient-to-b shadow-lg hover:scale-110 transition duration-1000"
                objectFit="contain"
              />
            </div>
            <div className="absolute top-12 left-16">
              <h1 className="mb-4 font-bold text-2xl">
                <span className="text-green-600 mr-2">01</span>
                {t("card_1_title")}
              </h1>
              <p className="my-6 text-lg font-medium">
                <strong>Covid-19 </strong>
                {t("card_1_subtitle")}
              </p>
              <p className="my-8 text-lg font-medium w-4/5">{t("card_1_p")}</p>
            </div>
          </div>
        </a>

        <a
          href="https://afyamsafiri.moh.go.tz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read more about travel advice"
        >
          <div className="relative overflow-hidden font-base">
            <div className="image-wrapper">
              <Image
                src={ImageTwo}
                alt="TravelAdvice_Image"
                className="opacity-90 shadow-lg hover:scale-110 transition duration-1000"
                objectFit="contain"
              />
            </div>
            <div className="absolute top-12 left-16">
              <h1 className="mb-4 font-bold text-2xl">
                <span className="text-green-600 mr-2">02</span>
                {t("card_2_title")}
              </h1>
              <p className="my-8 text-lg font-medium w-4/5">{t("card_2_p")}</p>
            </div>
          </div>
        </a>

        <a
          href="https://tz.usembassy.gov/covid-19-information/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read more about visa and travel ban"
        >
          <div className="relative overflow-hidden font-base">
            <div className="image-wrapper">
              <Image
                src={ImageThree}
                alt="Passport_Image"
                className="opacity-90 shadow-lg hover:scale-110 transition duration-1000"
                objectFit="contain"
              />
            </div>
            <div className="absolute top-12 left-16">
              <h1 className="mb-4 font-bold text-2xl">
                <span className="text-green-600 mr-2">03</span>
                {t("card_2_title")}
              </h1>
              <p className="my-8 text-lg font-medium w-4/5">{t("card_3_p")}</p>
            </div>
          </div>
        </a>
      </div>

      <div className="grid place-items-center mt-8 mb-24">
        <h1 className="italic">{t("source")}</h1>
        <ul className="flex flex-wrap justify-center">
          <li className="mr-8">
            <a
              href="https://www.moh.go.tz/en/covid-19-info"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about Ministry of Health Tanzania "
              className="inline-block p-4 text-green-600 rounded-t-lg border-b-2 border-green-600 active dark:text-green-500 dark:border-green-500 hover:opacity-70 transition"
            >
              {t("source_1")}
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Tanzania.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about International Travel"
              className="inline-block p-4 text-green-600 rounded-t-lg border-b-2 border-green-600 active dark:text-green-500 dark:border-green-500  hover:opacity-70 transition"
            >
              {t("source_2")}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Covid;
