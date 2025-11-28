import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Educacion from "./components/Educacion.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import "./index.css";

function App() {
  // Datos personales → usados por CabeceraCV
  const datosPersonales = {
    nombre: "Fabián Marín",
    cargo: "Desarrollador Web Jr. | Estudiante de ADSO",
    ciudad: "Medellín – Calle 123 #45-67",
    contacto: {
      telefono: "311 339 5127",
      correo: "fabianandres.marin01@gmail.com",
      documento: "1038062797",
      nacimiento: "29 de diciembre de 2007",
      foto: "./IMG/fotoCV.jpg"
    }
  };

  // Perfil
  const resumenProfesional =
    "Soy una persona responsable, creativa y con facilidad para el trabajo en equipo...";

  // Experiencia
  const listaExperiencia = [
    { cargo: "Sistema de Gestión de Notas", empresa: "Personal", periodo: "2024" },
    { cargo: "Página institucional I.E. FESA", empresa: "I.E. FESA", periodo: "2023" },
    { cargo: "Portafolio Web", empresa: "Personal", periodo: "2024" }
  ];

  // Educación
  const estudios = [
    { titulo: "Técnico en Programación de Software", institucion: "SENA", periodo: "2024" },
    { titulo: "Bachiller Académico", institucion: "I.E. FESA", periodo: "2024" }
  ];

  const talleres = [
    { nombre: "Curso Básico de React", institucion: "Udemy", periodo: "2024" },
    { nombre: "Fundamentos de Bases de Datos", institucion: "Platzi", periodo: "2023" }
  ];

  return (
    <div className="cv-container">
      <div className="cv-content">
        <CabeceraCV {...datosPersonales} />
        <Perfil resumen={resumenProfesional} />
        <Experiencia experiencias={listaExperiencia} />
        <Educacion estudios={estudios} talleres={talleres} />
        <StackTecnologias />
      </div>
    </div>
  );
}

export default App;
