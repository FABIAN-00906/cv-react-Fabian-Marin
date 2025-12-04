// src/App.jsx
import React, { useState } from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

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
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const toggleHabilidades = () => {
    setMostrarHabilidades((prev) => !prev);
  };

  const agregarTecnologia = (nueva) => {
    const existe = tecnologias.some(
      (t) => t.nombre.toLowerCase() === nueva.nombre.toLowerCase()
    );

    if (existe) {
      alert("La tecnología ya existe en el stack.");
      return;
    }

    setTecnologias((prev) => [...prev, nueva]);
  };

  return (
    <div className="cv-container">
      <div className="cv-content">
        <CabeceraCV {...datosPersonales} />
        <Perfil {...perfil} />
        <Experiencia experiencias={experiencia} />
        <Educacion estudios={educacion} talleres={talleres} />

        <StackTecnologias tecnologias={tecnologias} />

        <FormularioTecnologia onAgregar={agregarTecnologia} />

        <ToggleHabilidades
          habilidades={habilidades}
          mostrar={mostrarHabilidades}
          onToggle={toggleHabilidades}
        />

      </div>
    </div>
  );
}

export default App;
