import { useEffect, useState } from "react";
import PricingCard from "./PricingCards";
import Toggle from "./Toggle";
import useTranslation from "next-translate/useTranslation";

function Packages(props) {
  const { t, lang } = useTranslation("sponsors");

  const [checked, setChecked] = useState(false);

  const handleChange = () => { 
    
    setChecked(!checked); 
    
  }; 
  return (
    <section className="mb-32">
      <h1 className="text-4xl font-bold font-base text-center capitalize">
        {t("package_title")}
      </h1>
      <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />
 
      <Toggle checked={checked} handleChange={handleChange}/>

      <PricingCard checked={checked}/>
    </section>
  );
}

export default Packages;
