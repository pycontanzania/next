import { useRouter } from "next/router";
import Home from "../../components/Home/Home";
import { getGalleryImages, getSpeakersByYear } from "../../helpers/api-utils";

function Event({speakers,gallery}) {
  const router = useRouter();

  const year = router.query.eventYear;
  
  return (
      <Home speakers={speakers} gallery={gallery} year={year}/>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { eventYear } = params;

  const numYear = Number(eventYear);

  const eventSpeakers = await getSpeakersByYear(numYear);

  const gallery = await getGalleryImages();

  return {
    props: {
      speakers: eventSpeakers,
      gallery
    },
  };
}

export function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      { params: { eventYear: '2019'} },
      { params: { eventYear: '2020' } },
      { params: { eventYear: '2021' } },
    ],
  };
}
export default Event;
