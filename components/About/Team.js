import Contact from "./Contact";
import TeamCards from "./TeamCards";
import useTranslation from "next-translate/useTranslation";

function Team(props) {
  const { t, lang } = useTranslation("about");

  return (
    <section className="my-24">
      <h1 className="text-2xl md:text-4xl font-bold font-base text-center">
        {t("team_title")}
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <p className="md:w-1/2 mx-auto my-4 text-xl italic font-base text-gray-500  dark:text-gray-400">
       {t("team_desc")}
      </p>

      <Contact />

      <TeamCards />
    </section>
  );
}

export default Team;
