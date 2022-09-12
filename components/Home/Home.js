import Head from "next/head";

//components
import Hero from "./Hero";

function Home(props) {
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
          {/* <meta property="og:image" content="https://albertsigsbert.netlify.app/og/home.png" /> */}

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PyconTanzania" />
          <meta name="twitter:title" content="Pycon Tanzania" />
          <meta name="twitter:description" content="The official website of Pycon Tanzania" />
          {/* <meta name="twitter:image" content="https://albertsigsbert.netlify.app/og/home.png" /> */}
      </Head>

               
      <Hero/>
                            
    </>
  );
}

export default Home;
