import { useRouter } from "next/router";
import Home from "../../components/Home/Home";
import { getImagesByYear, getSpeakersByYear } from "../../helpers/api-utils";

function Event({ speakers, gallery }) {
  const router = useRouter();

  const year = router.query.eventYear;

  return <Home speakers={speakers} gallery={gallery} year={year} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { eventYear } = params;

  const numYear = Number(eventYear);

  const eventSpeakers = await getSpeakersByYear(numYear);

  const gallery = await getImagesByYear(numYear);

  return {
    props: {
      speakers: eventSpeakers,
      gallery,
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { eventYear: "2019" }, locale: "en-US" },
      { params: { eventYear: "2019" }, locale: "sw-TZ" },
      { params: { eventYear: "2020" }, locale: "en-US" },
      { params: { eventYear: "2020" }, locale: "sw-TZ" },
      { params: { eventYear: "2021" }, locale: "en-US" },
      { params: { eventYear: "2021" }, locale: "sw-TZ" },
    ],
  };
}
export default Event;
