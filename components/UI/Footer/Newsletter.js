import { FaPaperPlane } from "react-icons/fa";

function Newsletter(props) {
  return (
    <div className="my-16 sm:my-0 lg:col-span-2 ">
      <h3 className="text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
        Newsletter
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Signup for our newsletter to get the latest news in your inbox.
      </p>
      <div className="flex items-center max-w-md my-8 bg-white">
        <div className="w-full">
          <input
            type="email"
            className="w-full px-4 py-3 text-gray-800 border-4 border-gray-800 dark:border-gray-300 focus:outline-none focus:border-green-600"
            placeholder="Enter your email"
          />
        </div>
        <div className="border-2 border-green-600">
          <button
            type="submit"
            className="flex items-center bg-green-600 justify-center w-12 h-13 text-white"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
      <p>Your email is safe with us. We don&apos;t spam.</p>
    </div>
  );
}

export default Newsletter;
