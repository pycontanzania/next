import Hero from "./Hero";
import Article from "./Article";
import Ticket from "./Ticket";

function CodeOfConduct(props) {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 my-12  md:grid-cols-3 gap-16">
         <Article/>
         <Ticket/>
      </div>
    </>
  );
}

export default CodeOfConduct;
