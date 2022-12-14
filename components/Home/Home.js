import Head from "next/head";

//components
import Hero from "./Hero";
import Jumbotron from "./Jumbotron";
import Programme from "./Programme";
import Speakers from "./Speakers";

function Home({speakers, gallery, year="2022"}) {
  return (
    <>
      <Head>
          <title>Pycon Tanzania</title>
          <meta name="description" content="The official website of Pycon Tanzania"/>

          {/* OpenGraph Metatags */}
          <meta property="og:title" content="Pycon Tanzania" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://next-pycon.vercel.app/" />
          <meta property="og:description" content="The official website of Pycon Tanzania" />
          <meta property="og:image" content="https://next-pycon.vercel.app/screenshots/home.png" />

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PyconTanzania" />
          <meta name="twitter:title" content="Pycon Tanzania" />
          <meta name="twitter:description" content="The official website of Pycon Tanzania" />
          <meta name="twitter:image" content="https://next-pycon.vercel.app/screenshots/home.png" />
      </Head>

               
      <Hero gallery={gallery} year={year}/>

      <Speakers speakers={speakers} />

      <Programme />

      <Jumbotron/>
                            
    </>
  );
}

export default Home;
