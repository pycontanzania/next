import { FaPaperPlane } from "react-icons/fa";
import useTranslation from 'next-translate/useTranslation'

function Newsletter(props) {
  const {t} = useTranslation('common')
  return (
    <div className="my-16 sm:my-0 lg:col-span-2 ">
      <h1 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
       {t('title')}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
      {t('desc')}
      </p>
      <div className="flex items-center max-w-md my-8 bg-white">
        <div className="w-full">
          <input
            type="email"
            className="w-full px-4 py-3 placeholder:text-gray-800 dark:placeholder:text-gray-200 border-4 border-gray-800 dark:border-gray-300 focus:outline-none focus:border-green-600"
            placeholder= {t('input_text')}
          />
        </div>
        <div className="border-2 border-green-600">
          <button
            type="submit"
            aria-label="send-email"
            className="flex items-center bg-green-600 justify-center w-12 h-13 text-white"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
      <p> {t('info')}</p>
    </div>
  );
}

export default Newsletter;
