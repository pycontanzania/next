import Image from "next/image";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Noah from "../../public/img/team/noah.png";
import CR from "../../public/img/team/cr.png";
import Mtuchi from "../../public/img/team/mtuchi.png";
import Julius from "../../public/img/team/julius.png";
import Zephania from "../../public/img/team/zephania.png";
import Davis from "../../public/img/team/davis.png";
import Zee from "../../public/img/team/zee.png";
import James from "../../public/img/team/james.png";
import Lupyana from "../../public/img/team/lupyana.png";

function TeamCards(props) {
  const router = useRouter();
  const { locale } = router;

  const teamMembers = [
    {
      name: "Noah",
      role: `${locale === 'en-US' ? 'Convener': 'Mratibu'}`,
      img: Noah,
      linkedin: "https://www.linkedin.com/in/mainamukhangunoah/",
      twitter: "",
      insta: "",
    },
    {
      name: "CatherineRose Barretto",
      role: `${locale === 'en-US' ? 'Secretariate': 'Sekretarieti'}`,
      img: CR,
      linkedin: "https://www.linkedin.com/in/catherinerose-barretto/",
      twitter: "https://twitter.com/CRBarretto",
      insta: "https://www.instagram.com/crbarretto/",
    },
    {
      name: "Mtuchi",
      role: `${locale === 'en-US' ? 'Secretariate': 'Sekretarieti'}`,
      img: Mtuchi,
      linkedin: "https://www.linkedin.com/in/mtuchi/",
      twitter: "htts://twitter.com/mtuchidev",
      insta: "",
    },
    {
      name: "Julius TM",
      role: `${locale === 'en-US' ? 'Ticket & Registration': 'Tiketi & Usajili'}`,
      img: Julius,
      linkedin: "https://www.linkedin.com/in/juliustm/",
      twitter: "https://twitter.com/juliusmoshiro",
      insta: "",
    },
    {
      name: "Zephania",
      role: `${locale === 'en-US' ? 'Transport': 'Usafiri'}`,
      img: Zephania,
      linkedin: "https://www.linkedin.com/in/zephania-reuben-a42233185/",
      twitter: "https://twitter.com/nsomazr",
      insta: "",
    },
    {
      name: "Davis",
      role: `${locale === 'en-US' ? 'Speakers Dept': 'Idara ya Wazungumzaji'}`,
      img: Davis,
      linkedin: "https://www.linkedin.com/in/davis-david-783461124/",
      twitter: "https://twitter.com/Davis_McDavid",
      insta: "",
    },
    {
      name: "Zee",
      role: `${locale === 'en-US' ? 'Outreach': 'Ufikiaji'}`,
      img: Zee,
      linkedin: "https://www.linkedin.com/in/zeenath-abdulaziz-68ab4991/",
      twitter: "https://twitter.com/zee_sherally",
      insta: "",
    },
    {
      name: "James",
      role: `${locale === 'en-US' ? 'Logistics': 'Vifaa'}`,
      img: James,
      linkedin: "https://www.linkedin.com/in/james-julius-a46baa75",
      twitter: "",
      insta: "",
    },
    {
      name: "Lupyana",
      role: `${locale === 'en-US' ? 'Promotional Materials': 'Vifaa vya Utangazaji'}`,
      img: Lupyana,
      linkedin: "https://www.linkedin.com/in/lupyana/",
      twitter: "",
      insta: "https://www.instagram.com/lupyanambembati/",
    },
  ];
  return (
    <div className="my-16 grid place-items-center gap-8 grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {teamMembers &&
        teamMembers.map((member) => (
          <div className="card shadow-2xl p-2" key={member.name}>
            <div className="relative h-64 w-64">
              <Image
                src={member.img}
                className="cursor-pointer transition ease-in hover:-translate-y-0.5 hover:scale-105 duration-300"
                layout="fill"
                objectFit="contain"
                alt="Profile Image"
              />

              <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name}'s linkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    aria-label={`${member.name}'s twitter`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
                  >
                    <FaTwitter />
                  </a>
                )}
                {member.insta && (
                  <a
                    href={member.insta}
                    aria-label={`${member.name}'s Instagram`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
                  >
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
            <div className="card-content text-center mt-2 font-base">
              <h1 className="text-xl font-semibold">{member.name}</h1>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TeamCards;
