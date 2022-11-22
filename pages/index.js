import {  getCurrentImages, getCurrentSpeakers,  } from "../helpers/api-utils";

//Components
import Home from "../components/Home/Home";

function HomePage({speakers, gallery}) {
  return <Home speakers={speakers} gallery={gallery}/>;
}

export async function getStaticProps() {
  const speakers = await getCurrentSpeakers();
  const gallery = await getCurrentImages();

  return {
    props: {
      speakers,
      gallery
    },
  };
}

export default HomePage;
