import Packages from "./Packages";
import SponsorCards from "./SponsorCards";
import useTranslation from "next-translate/useTranslation";

function Sponsor(props) {
  const { t, lang } = useTranslation("sponsors");
  return (
    <section className="my-8">
      <h1 className="text-4xl font-bold font-base text-center capitalize">
        {t("title")}
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-8 md:w-3/4 font-base text-gray-600 dark:text-gray-300 leading-8 tracking-wider mx-auto">
        <p className="text-xl my-4 ">
          {t("subtitle")}
        </p>
        <p className="text-xl">
          {t("subtitle_1")}
        </p>
      </div>

      <Packages/>

      <SponsorCards/>

     
    </section>
  );
}

export default Sponsor;
