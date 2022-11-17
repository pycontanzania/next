import { getServerSideSitemap } from "next-sitemap";


const siteUrl = "https://next-pycon.vercel.app";

export const getServerSideProps = async (ctx) => {

    const years = ['2019', '2020','2021'];

    const newsSitemaps = years.map((year) => ({
      loc: `${siteUrl}/events/${year}`,
      lastmod: new Date().toISOString(),
    }));
  
    const fields = [...newsSitemaps];
  
    return getServerSideSitemap(ctx, fields);
  };

export default function Site() {}