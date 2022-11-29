import useTranslation from "next-translate/useTranslation";

function CTA(props) {
  const { t, lang } = useTranslation("about");
  
  return (
    <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 capitalize text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        {t("cta")}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {t("cta_details")}
      </p>
    </div>
  );
}

export default CTA;
