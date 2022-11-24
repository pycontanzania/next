import useTranslation from "next-translate/useTranslation";

function Programme(props) {
  const { t } = useTranslation("home");
  return (
    <section>
      <h1 className="text-4xl font-bold font-base text-center">
        {t("programme_title")}
      </h1>
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-4">
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">
              {t("programme_title_1")}
            </h1>
            <p className="font-base text-xl">{t("programme_desc_1")}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">
              {t("programme_title_2")}
            </h1>
            <p className="font-base text-xl">{t("programme_desc_2")}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">
              {t("programme_title_3")}
            </h1>
            <p className="font-base text-xl">{t("programme_desc_3")}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-base mb-4">
              {t("programme_title_4")}
            </h1>
            <p className="font-base text-xl">{t("programme_desc_4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programme;
