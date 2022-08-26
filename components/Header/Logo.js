import Link from "next/link";

function Logo(props) {
  return (
    <div>
      <Link href="/">
        <a className="font-fancy text-xl">PyconTz</a>
      </Link>
    </div>
  );
}

export default Logo;
