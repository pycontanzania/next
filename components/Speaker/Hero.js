import Countdown from "../UI/Countdown";
import useTranslation from "next-translate/useTranslation";

function Hero() {

  const { t, lang } = useTranslation("speak");

  return (
    <section className="mt-16 md:my-24 font-base text-gray-600 dark:text-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-2 md:gap-0 pb-4">
        <div>
          <h1 className="text-4xl font-bold"> {t("common:hero_title")}</h1>
        </div>
        <Countdown />
      </div>
      <hr className="my-4" />
    </section>
  );
}

export default Hero;
