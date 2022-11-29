import useTranslation from "next-translate/useTranslation";

function Article(props) {
  const { t } = useTranslation("coc");
  return (
    <article className="md:col-span-2 font-base text-gray-600 dark:text-gray-200">
      <p className="text-lg">{t("p1")}</p>

      <h1 className="mt-8 mb-4 font-bold text-2xl">{t("title_1")}</h1>
      <p className="text-lg">
      {t("p2")}
      </p>
      <p className="text-lg my-8">
      {t("p3")}
      </p>

      <h1 className="mt-8 mb-4 font-bold text-2xl">{t("title_2")}</h1>
      <p className="text-lg">
      {t("p4")}
      </p>
      <ul className="list-disc list-inside text-lg ml-4 my-8">
        <li>{t("li_1")}</li>
        <li>{t("li_2")}</li>
        <li>{t("li_3")}</li>
        <li>{t("li_4")}</li>
      </ul>

      <h1 className="mt-8 mb-4 font-bold text-2xl">{t("title_3")}</h1>
      <p className="text-lg">
        {t("p5")}
      </p>
      <p className="text-lg my-8">
       {t("p6")}
      </p>
      <ul className="list-disc list-outside text-lg ml-4 my-8">
        <li>{t("li_5")}</li>
        <li>{t("li_6")}</li>
        <li>{t("li_7")}</li>
      </ul>

      <p className="text-lg">
       {t("p7")}
      </p>
      <p className="text-lg mt-4 mb-16">
       {t("p8")}
      </p>
    </article>
  );
}

export default Article;
