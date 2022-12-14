import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Logo } from "../components/UI/Logo";
function NotFound(props) {
  return (
    <section className="h-screen flex">
      <div className="m-auto text-center">
        <Logo/>
        
        <h1 className="text-green-600 text-xl font-bold">404</h1>
        <h2 className="text-gray-900 dark:text-gray-300 text-4xl md:text-6xl font-semibold md:font-bold my-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 w-4/5 md:w-full text-xl mx-auto my-4">Sorry, we couldn&apos;t find the page your looking for.</p>


        <Link href="/">
          <a className="text-green-600">
            Go back home{" "}
            <span>
              <HiArrowNarrowRight className="inline" />
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
