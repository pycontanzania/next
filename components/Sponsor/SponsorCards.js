import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import PSF from "../../public/img/sponsors/psf.jpg";
import TigoPesa from "../../public/img/sponsors/tigo-pesa.png";
import Tispa from "../../public/img/sponsors/tispa.png";
import HabariNode from "../../public/img/sponsors/habari.png";
import k15 from "../../public/img/sponsors/k15.png";
import wia from "../../public/img/sponsors/wiacom.png";
import maisha from "../../public/img/sponsors/maishabroadband.png";
import Flashnet from "../../public/img/sponsors/flashnet.png";

const sponsors = [
  {
    id: 1,
    name: "Python Software Foundation",
    url: "https://www.python.org/psf/",
    image: PSF,
  },
  {
    id: 2,
    name: "Tigo Pesa",
    url: "https://tigo.co.tz/",
    image: TigoPesa,
  },
  {
    id: 3,
    name: "Tispa",
    url: "https://tispa.or.tz/",
    image: Tispa,
  },
  {
    id: 4,
    name: "Habari Node",
    url: "https://habari.co.tz/",
    image: HabariNode
  },
  {
    id: 5,
    name: "k15",
    url: "https://k15.photos/",
    image: k15,
  },
  {
    id: 6,
    name: "WiaCom",
    url: "https://wia.co.tz/",
    image: wia,
  },
  {
    id: 7,
    name: "MaishaBroadband",
    url: "https://maisha.co.tz/",
    image: maisha,
  },
  {
    id: 8,
    name: "Flashnet",
    url: "https://flashnet.co.tz/",
    image: Flashnet,
  },
 
];

function SponsorCards(props) {
  const { t, lang } = useTranslation("sponsors");
  return (
    <>
      <h1 className="text-4xl font-bold font-base text-center capitalize">
      { lang === 'en-US' ? 'Sponsors' :'Wafadhili'}
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-16 grid place-items-center grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                 height={200}
                 width={200}
                objectFit="contain"
                alt="Sponsor Image"
              />
            </a>
          ))}
      </div>
    </>
  );
}

export default SponsorCards;
