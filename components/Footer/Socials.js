import Link from "next/link";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const prevEvents = [
  {
    name: "Pycon 2019",
    link: "/events/2019",
  },
  {
    name: "Pycon 2020",
    link: "/events/2020",
  },
];

const community = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Open Source Projects",
    link: "https://github.com/pycontanzania",
  },
  {
    name: "Discord Server",
    link: "https://discord.gg/QzwnHA3KB4",
  },
  {
    name: "Covid Guideline",
    link: "/covid/19",
  },
];

const socials = [
  {
    name: "Telegram",
    link: "https://t.me/joinchat/JVIj_0D4zRIzNjg0",
    icon: <FaTelegramPlane className="text-sky-600 text-2xl md:text-3xl" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/PyconTanzania",
    icon: <FaTwitter className="text-blue-700 text-2xl md:text-3xl" />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/pycon.tanzania",
    icon: <FaInstagram className="text-red-500 text-2xl md:text-3xl" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/pycontanzania",
    icon: <FaLinkedin className="text-sky-500 text-2xl md:text-3xl" />,
  },
  {
    name: "Github",
    link: "https://github.com/pycontanzania",
    icon: <FaGithub className="text-sky-400 text-2xl md:text-3xl" />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pycontanzania",
    icon: (
      <FaFacebookF className="text-gray-700 dark:text-gray-200 text-2xl md:text-3xl" />
    ),
  },
];

function Events() {
  return (
    <ul className="text-lg text-gray-600 dark:text-gray-300">
      {prevEvents.map((event) => (
        <li key={event.name} className="pb-2">
          <Link href={event.link}>{event.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function Community() {
  return (
    <ul className="text-lg text-gray-600 dark:text-gray-300">
      {community.map((com) => {
        if (com.link.charAt(0) === "h") {
          return (
            <li key={com.name} className="pb-2">
              <a
                aria-label={com.name}
                target="_blank"
                rel="noopener noreferrer"
                href={com.link}
              >
                {com.name}
              </a>
            </li>
          );
        }
        return (
          <li key={com.name} className="pb-2">
            <Link href={com.link}>{com.name}</Link>
          </li>
        );
      })}

    </ul>
  );
}

function Socials() {
  return (
    <ul className="flex space-x-8 sm:justify-center">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.link}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { Socials, Events, Community };
