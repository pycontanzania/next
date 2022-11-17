import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";

//Images
// import LightLogo from "../../public/img/logoLight.jpg";
// import DarkLogo from "../../public/img/logoDark.jpg";
import defaultLogo from "../../public/logo.jpg";


function Logo(props) {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = defaultLogo
      break
    case 'dark':
      src = defaultLogo
      break
    default:
      src = defaultLogo
      break
  }

  return (
    <div>   
      <Link href="/">
         <a>
           <Image src={src} alt="logo" width={30} height={30} className="rounded-lg"/>
         </a>
      </Link>
    </div>
  );
}

export default Logo;
