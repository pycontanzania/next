import { FiMail } from "react-icons/fi";

function Contact(props) {
  return (
    <div className="grid place-items-center">
         <a
      href="mailto:secretariat@pycon.or.tz"
      className="inline-flex place-self-center items-center px-5 py-2.5 font-medium rounded-lg text-sm  text-center  text-white mx-auto bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Email Us
      <FiMail className="ml-2 -mr-1 w-5 h-5" />
    </a>
    </div>
  );
}

export default Contact;
