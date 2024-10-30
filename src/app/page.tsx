import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>

      <div className="experience">
        <h3>Experience</h3>
        <p>text</p>

        <div className="experience-time"></div>
      </div>
      <div className="info">
        <h3>Languages</h3>
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
        <div className="social"></div>
        <button>Contact-me</button>
      </div>
    </main>
  );
}
