import Image from "next/image";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Noah from "../../public/img/team/noah.png";
import CR from "../../public/img/team/cr.png";
import Mtuchi from "../../public/img/team/mtuchi.png";
import Julius from "../../public/img/team/julius.png";
import Albert from "../../public/img/team/albert.jpg";
import Mojo from "../../public/img/team/mojo.jpg";
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
      name: "Albert",
      role: `${locale === 'en-US' ? 'Web Dev (Frontend)': 'Web Dev (Frontend)'}`,
      img: Albert,
      linkedin: "https://www.linkedin.com/in/albertsigsbert/",
      twitter: "https://twitter.com/albert_sigsbert",
      insta: "",
    },
   
    {
      name: "Mojo",
      role: `${locale === 'en-US' ? 'Web Dev (Backend)': 'Web Dev (Backend)'}`,
      img: Mojo,
      linkedin: "https://fuadhabib.xyz",
      twitter: "https://twitter.com/AviTheDev",
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
