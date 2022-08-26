import Head from "next/head";

//components
import Hero from "./Hero";

function Home(props) {
  return (
    <>
      <Head>
        <title>Pycon Tanzania</title>
        <meta
          name="description"
          content="The official website of Pycon Tanzania"
        />

        {/* OpenGraph Metatags */}
        {/* <meta property="og:title" content="Albert Sigsbert Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://albertsigsbert.netlify.app/" />
                <meta property="og:description" content="Albert Sigsbert personal portfolio website" />
                <meta property="og:image" content="https://albertsigsbert.netlify.app/og/home.png" /> */}

        {/* Twitter Meta */}
        {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@albert_sigsbert" />
                <meta name="twitter:title" content="Albert Sigsbert Portfolio" />
                <meta name="twitter:description" content="Albert Sigsbert personal portfolio website." />
                <meta name="twitter:image" content="https://albertsigsbert.netlify.app/og/home.png" /> */}
      </Head>

      {/*          
              <Hero/>
                            */}

            <h1 className="text-center text-4xl my-64">PyconTz</h1>
    </>
  );
}

export default Home;
