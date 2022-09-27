import Head from "next/head";

//Components
import Article from "./Article";
import Hero from "./Hero";
import Timeline from "./Timeline";

function Speaker(props) {
  return (
    <>
     <Head>
          <title>Pycon Tanzania | Speak</title>
          <meta name="description" content="Call for speaker for Pycon 2022"/>

          {/* OpenGraph Metatags */}
          <meta property="og:title" content="Pycon Tanzania | Speak" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://next-pycon.vercel.app/speak" />
          <meta property="og:description" content="Call for speaker for Pycon 2022" />
          <meta property="og:image" content="https://next-pycon.vercel.app/screenshots/speak.png" />

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PyconTanzania" />
          <meta name="twitter:title" content="Pycon Tanzania" />
          <meta name="twitter:description" content="Call for speaker for Pycon 2022" />
          <meta name="twitter:image" content="https://next-pycon.vercel.app/screenshots/speak.png" />
      </Head>


      <Hero />
      <div className="grid grid-cols-1 my-12 md:my-24 md:grid-cols-3 gap-16">
        <Article />
        <Timeline />
      </div>
    </>
  );
}

export default Speaker;
