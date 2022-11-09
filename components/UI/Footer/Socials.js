import Link from "next/link";

import Telegram from "./icons/telegram.svg";
import Instagram from "./icons/instagram.svg";
import Twitter from "./icons/twitter.svg";
import LinkedIn from "./icons/linkedin.svg";
import Facebook from "./icons/fb.svg";
import Github from "./icons/github.svg";
import YouTube from "./icons/youtube.svg";
import Discord from "./icons/discord.svg";

const prevEvents = [
  {
    name: "Pycon 2019",
    link: "/events/2019",
  },
  {
    name: "Pycon 2020",
    link: "/events/2020",
  },
  {
    name: "Pycon 2021",
    link: "/events/2021",
  },
];

const community = [
  {
    name: "About Us",
    link: "/about",
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
    link: "/covid",
  },
];

const socials = [
  {
    name: "Discord",
    link: "https://discord.gg/QzwnHA3KB40",
    icon: <Discord />,
  },
  {
    name: "Telegram",
    link: "https://t.me/joinchat/JVIj_0D4zRIzNjg0",
    icon: <Telegram />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/pycontanzania",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    link: "https://github.com/pycontanzania",
    icon: <Github />,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCVaRe-jaUZH4ajleOiWN8vQ",
    icon: <YouTube />,
  },

  {
    name: "Twitter",
    link: "https://twitter.com/PyconTanzania",
    icon: <Twitter />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/pycon.tanzania",
    icon: <Instagram />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pycontanzania",
    icon: <Facebook />,
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
        <li key={social.name} className="w-7 h-7">
          <a
            href={social.link}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <marquee>{social.name}</marquee> */}
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { Socials, Events, Community };
