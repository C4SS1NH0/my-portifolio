import Image from "next/image";
import "./header.scss"

export function Header() {
  return (
    <div className="header">
      
      <div>
        <h1>Hi, i'm Cássio 👋</h1>
        <h2>Developer Front-End</h2>
      </div>
      <Image src="/" alt="Vercel logomark" width={325} height={310} priority/>
    </div>
  );
}
