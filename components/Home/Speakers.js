import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function Speakers({ speakers }) {
  const { t } = useTranslation('home');
  return (
    <section>
      <h1 className="text-4xl font-bold font-base text-center">
        {t("speaker_title")}
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-20 grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
        {speakers &&
          speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center pb-10">
                <div className="relative  my-8 h-24 w-24">
                  {speaker.image && (
                    <Image
                      className="rounded-full bg-gray-300 dark:bg-gray-700 shadow-lg"
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>

                <h2 className="mb-1 text-xl font-medium font-base text-gray-900 dark:text-white">
                  {speaker.name}
                </h2>
                <span className="text-sm font-base w-1/2 text-center text-gray-500 dark:text-gray-400">
                  {speaker.expertise}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium font-base text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    {t("speaker_website")}
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium font-base text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-900 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    {t("speaker_profile")}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Speakers;
