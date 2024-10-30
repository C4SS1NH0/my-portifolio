import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel logomark"
          width={100}
          height={20}
        />
        <div>
          <h1>Hi, i'm Cássio 👋</h1>
          <h2>Developer Front-End</h2>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <p>text</p>

          <div className="experience-time"></div>
        </div>
        <div className="infos">
          <h3>Laguages</h3>
          <div className="languages-info">
            <span>EN - Intermediary</span>
            <span> PT-BR - Native Speaker</span>
          </div>

          <h3>Education</h3>
          <div className="educational-info">
            <span>
              Internet Systems Technologist - Faculdade Meta | Macapá-AP
            </span>
            <span>Emoji</span>
          </div>
        </div>

        <div className="btns">
          <div className="social">

          </div>
          <button>Contact-me</button>
        </div>
      </div>
    </main>
  );
}
