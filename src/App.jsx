import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";

function App() {
  return (
    <div className="cv-container">
      <div className="cv-content">
        <CabeceraCV />
        <Perfil />
        <Experiencia />
        <Educacion />
      </div>
    </div>
  );
}

export default App;
