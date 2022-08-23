import Link from "next/link";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaGithub,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="mx-[6%] my-8 font-base">
      <div className="md:grid md:grid-cols-6 gap-4 mb-24">
        <div className="col-span-2 w-11/12 ">
          <h3 className="text-xl text-gray-700 font-medium mb-4">Disclaimer</h3>
          <p className="text-lg text-gray-600">
            PyCon Tanzania follows other
            <span className="mx-2">
              <a
                className="text-sky-400 hover:text-blue-500"
                href="https://pycon.org"
              >
                Python Conferences
              </a>
            </span>
            | Organized by the
            <span className="mx-2">
              <a className="text-sky-400  hover:text-blue-500" href="">
                Python User Group
              </a>
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-xl text-gray-700 font-medium mb-4">Our Community</h3>
          <ul className="text-lg text-gray-600">
            <li className="pb-2">
              <a href="https://pycon.or.tz/">About Us</a>
            </li>
            <li className="pb-2">
              <a href="https://github.com/pycontanzania">
                Open Source Projects
              </a>
            </li>
            <li className="pb-2">
              <a href="">Discord Server</a>
            </li>
            <li>
              <a href="https://pycon.or.tz/covid-19/">Covid Guideline</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-gray-700 font-medium mb-4">Previous Events</h3>
          <ul className="text-lg text-gray-600">
            <li className="pb-2">
              <a href="https://pycon.or.tz/2019">2019</a>
            </li>
            <li>
              <a href="https://pycon.or.tz/2020">2020</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl text-gray-700 font-medium mb-4">Newsletter</h3>
          <p className="text-lg text-gray-600">
            Signup for our newsletter to get the latest news in your inbox.
          </p>
          <div className="flex items-center max-w-md my-8 mx-auto bg-white rounded-lg">
            <div className="w-full">
              <input
                type="email"
                className="w-full px-4 py-3 text-gray-800 border-2 border-gray-800 rounded-l-lg focus:outline-none focus:border-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-green-600 justify-center w-12 h-13 text-white rounded-r-lg"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <p>Your email is safe with us. We don't spam.</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Link className="text-lg font-light" href="/">
          <a>
            &copy; Made with <FaHeart className="text-red-600 inline" /> by Pycon
            Tanzania Community
          </a>
        </Link>
        <ul className="flex gap-8 text-3xl">
          <li>
            <a className="text-sky-600" href="">
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a className="text-blue-700" href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a className="text-red-500" href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className="text-sky-500" href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a className="text-sky-400" href="">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a className="text-gray-700" href="">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
