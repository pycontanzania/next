import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";

//Images
import LightLogo from "../../public/img/logoLight.jpg";
import DarkLogo from "../../public/img/logoDark.jpg";


function Logo(props) {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = DarkLogo
      break
    case 'dark':
      src = LightLogo
      break
    default:
      src = DarkLogo
      break
  }

  return (
    <div>   
      <Link href="/">
         <a>
           <Image src={src} alt="logo" width={60} height={40}/>
         </a>
      </Link>
    </div>
  );
}

export default Logo;
