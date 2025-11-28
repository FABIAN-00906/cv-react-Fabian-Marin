import React from "react";
import "./stack.css";

export default function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "JavaScript", tipo: "frontend" },
    { id: 3, nombre: "HTML", tipo: "frontend" },
    { id: 4, nombre: "CSS", tipo: "frontend" },
    { id: 5, nombre: "Node.js", tipo: "backend" },
    { id: 6, nombre: "Express", tipo: "backend" },
    { id: 7, nombre: "PostgreSQL", tipo: "base de datos" },
    { id: 8, nombre: "MongoDB", tipo: "base de datos" },
    { id: 9, nombre: "Git", tipo: "herramienta" },
    { id: 10, nombre: "Vite", tipo: "herramienta" }
  ];

  const obtenerClaseColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "tag tag-frontend";
      case "backend":
        return "tag tag-backend";
      case "base de datos":
        return "tag tag-db";
      default:
        return "tag tag-default";
    }
  };

  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No hay tecnologías registradas.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <div className="tags-container">
        {tecnologias.map((tech) => (
          <span key={tech.id} className={obtenerClaseColor(tech.tipo)}>
            {tech.nombre} <small>— {tech.tipo}</small>
          </span>
        ))}
      </div>
    </section>
  );
}
