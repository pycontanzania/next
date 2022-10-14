import Packages from "./Packages";
import SponsorCards from "./SponsorCards";

function Sponsor(props) {
  return (
    <section className="my-8">
      <h1 className="text-4xl font-bold font-base text-center capitalize">
        Thanks to our sponsors
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

      <div className="my-8 md:w-3/4 font-base text-gray-600 dark:text-gray-300 leading-8 tracking-wider mx-auto">
        <p className="text-xl my-4 ">
          PyCon Tanzania is generously sponsored by organisations that support
          its aims. Sponsorship of PyCon gives organisation regional visibility,
          recognition and eco-system exposure. It is an excellent way to support
          the Python language community, the software developers and the open
          source software in Tanzania.
        </p>
        <p className="text-xl">
          Each sponsorship opportunity includes the additional benefits as
          described in the prospects below which are based on the
          organisation&apos;s sponsorship.
        </p>
      </div>

      <SponsorCards/>

      <Packages/>
    </section>
  );
}

export default Sponsor;
