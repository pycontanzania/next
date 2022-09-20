import Article from "./Article";
import Hero from "./Hero";
import Timeline from "./Timeline";

function Speaker(props) {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 my-12 md:my-24 md:grid-cols-3 gap-16">
        <Article />
        <Timeline />
      </div>
    </>
  );
}

export default Speaker;
