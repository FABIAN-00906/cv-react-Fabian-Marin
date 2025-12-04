// src/App.jsx
import React, { useState } from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";

import {
  datosPersonales,
  perfil,
  experiencia,
  educacion,
  talleres,
  stackTecnologias as tecnologiasIniciales,
  habilidades,
  proyectos
} from "./data/cvData";

import "./index.css";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const toggleHabilidades = () => {
    setMostrarHabilidades((prev) => !prev);
  };

  return (
    <div className="cv-container">
      <div className="cv-content">
        <CabeceraCV {...datosPersonales} />
        <Perfil {...perfil} />
        <Experiencia experiencias={experiencia} />
        <Educacion estudios={educacion} talleres={talleres} />

        <StackTecnologias tecnologias={tecnologiasIniciales} />

        <ToggleHabilidades
          habilidades={habilidades}
          mostrar={mostrarHabilidades}
          onToggle={toggleHabilidades}
        />

        {/* <Proyectos proyectos={proyectos} /> */}
      </div>
    </div>
  );
}

export default App;
