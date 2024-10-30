import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>


       <div className="info">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>EN - Intermediary</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
        <span>
          Tecnolidhsdj em sistemas para internet - Faculdade Meta
        </span>

        <span>emoji</span>
        </div>
        

       </div>

       <div className="btns">
        <div className="social">

        </div>
        <button>Contacte-me</button>
       </div>
    </main>
  );
}
