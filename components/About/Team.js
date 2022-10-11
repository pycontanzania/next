import Contact from "./Contact";
import TeamCards from "./TeamCards";

function Team(props) {
  return (
    <section className="my-24">
      <h1 className="text-4xl font-bold font-base text-center">
        The Organizing Team
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <p className="md:w-1/2 mx-auto my-4 text-xl italic font-base text-gray-500  dark:text-gray-400">
        The PyCon Tanzania organising committee team are experienced tech
        eco-system community members who have in the past, volunteered as
        organisers of various tech meetings beyond just PyCon Tanzania event.
      </p>

      <Contact />

      <TeamCards />
    </section>
  );
}

export default Team;
