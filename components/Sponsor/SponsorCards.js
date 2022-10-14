import Image from "next/image";
import sponsorImg from "../../public/img/sponsor.png";
import beemImg from "../../public/img/beem.png";

const sponsors = [
  {
    id: 1,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 2,
    name: "Beem Africa",
    url: "https://beem.africa/",
    image: beemImg,
  },
  {
    id: 3,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 4,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 5,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 6,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 7,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 8,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 9,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
  {
    id: 10,
    name: "Python",
    url: "https://www.python.org/psf/",
    image: sponsorImg,
  },
];

function SponsorCards(props) {
  return (
    <div className="my-16 grid place-items-center gap-x-16 gap-y-8 grid-cols-auto-fill">
      {sponsors &&
        sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            className="relative h-64 w-64"
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={sponsor.image}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Sponsor Image"
            />
          </a>
        ))}
    </div>
  );
}

export default SponsorCards;
