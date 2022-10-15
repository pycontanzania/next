import { useEffect, useState } from "react";
import PricingCard from "./PricingCards";
import Toggle from "./Toggle";

function Packages(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => { 
    
    setChecked(!checked); 
    
  }; 
  return (
    <section className="mb-32">
      <h1 className="text-4xl font-bold font-base text-center capitalize">
        Our Sponsorship Packages
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />
 
      <Toggle checked={checked} handleChange={handleChange}/>

      <PricingCard checked={checked}/>
    </section>
  );
}

export default Packages;
