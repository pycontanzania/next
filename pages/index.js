import { getAllSpeakers } from "../helpers/api-utils";

//Components
import Home from "../components/Home/Home";

function HomePage() {
  return <Home />;
}

export async function getStaticProps() {
  const speakers = await getAllSpeakers();
  return {
    props: {
      speakers
    },
  };
}

export default HomePage;
