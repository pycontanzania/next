import { getCurrentImages, getCurrentSpeakers } from "../helpers/api-utils";

//Components
import Home from "../components/Home/Home";

function HomePage({ speakers, gallery, greeting }) {
  return <Home speakers={speakers} gallery={gallery} greeting={greeting}/>;
}

export async function getStaticProps({ locale }) {
  const speakers = await getCurrentSpeakers();
  const gallery = await getCurrentImages();

  //Internationalization
  let greeting =
    locale === "en-US" ? "Welcome" : locale === "sw-TZ" ? "Karibu" : "";

  return {
    props: {
      speakers,
      gallery,
      greeting,
    },
  };
}

export default HomePage;
