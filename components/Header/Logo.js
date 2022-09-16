import Link from "next/link";

function Logo(props) {
  return (
    <div>
      <Link href="/">
         <a className="font-base font-semibold">Pycon Tz</a>
      </Link>
    </div>
  );
}

export default Logo;
