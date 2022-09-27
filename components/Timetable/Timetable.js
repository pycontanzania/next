import Head from "next/head";
import Hero from "./Hero";
import Tabs from "./Tabs";

function Timetable(props) {
    return (
       <>
       <Head>
          <title>Pycon Tanzania | Timetable</title>
          <meta name="description" content="Timetable for Pycon 2022 Event"/>

          {/* OpenGraph Metatags */}
          <meta property="og:title" content="Pycon Tanzania | Timetable" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://next-pycon.vercel.app/timetable" />
          <meta property="og:description" content="Timetable for Pycon 2022 Event" />
          {/* <meta property="og:image" content="https://next-pycon.vercel.app/screenshots/speak.png" /> */}

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PyconTanzania" />
          <meta name="twitter:title" content="Pycon Tanzania" />
          <meta name="twitter:description" content="Timetable for Pycon 2022 Event" />
          {/* <meta name="twitter:image" content="https://next-pycon.vercel.app/screenshots/speak.png" /> */}
      </Head>

       <Hero/>

       <Tabs />
       </>
    );
}

export default Timetable;