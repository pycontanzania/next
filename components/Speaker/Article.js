import useTranslation from "next-translate/useTranslation";

function Article(props) {
  const { t, lang } = useTranslation("speak");

  return (
    <article className="md:col-span-2 font-base text-gray-600 dark:text-gray-200">
      <h1 className="font-bold text-2xl">{t("title")}</h1>
      <p className="my-4 md:my-8 text-lg md:text-xl ">{t("excerpt")}</p>
      <p className="my-4 md:my-8 text-lg md:text-xl">{t("intro")}</p>
      <p className="my-4 md:my-8 text-lg md:text-xl">{t("sub_intro")}</p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("talks")}:</strong>
        {t("talks_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("tutorials")}:</strong>
        {t("tutorials_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("lightning_talks")}:</strong>
        {t("lightning_talks_desc")}
      </p>
      <p className="my-4 md:my-8 text-xl font-bold">
        {t("cta")}: speak@pycon.or.tz
      </p>

      <h1 className="font-bold text-xl mt-16 uppercase">{t("title_2")}</h1>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("apply")}:</strong> {t("apply_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("diversity")}:</strong> {t("diversity_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("detailed")}:</strong> {t("detailed_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("propose")}:</strong> {t("propose_desc")}
      </p>
      <p className="my-4 md:my-8 text-lg md:text-xl">
        <strong>{t("coc")}:</strong> {t("coc_desc")}
      </p>

      <h1 className="font-bold text-xl mt-16 uppercase">{t("title_3")}</h1>
      <p className="my-4 md:my-8 text-lg md:text-xl">{t("title_3_sub")}:</p>
      <ul className="list-disc list-inside text-lg md:text-xl mx-auto">
        <li>{t("option_1")}</li>
        <li>{t("option_2")}</li>
        <li>{t("option_3")}</li>
        <li>{t("option_4")}</li>
      </ul>
    </article>
  );
}

export default Article;
