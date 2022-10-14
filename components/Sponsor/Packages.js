import PricingCard from "./PricingCards";
import Toggle from "./Toggle";

function Packages(props) {
  return (
    <section className="mb-32">
      <h1 className="text-4xl font-bold font-base text-center capitalize">
        Our Sponsorship Packages
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />
 
      <Toggle/>

      <PricingCard/>
    </section>
  );
}

export default Packages;
