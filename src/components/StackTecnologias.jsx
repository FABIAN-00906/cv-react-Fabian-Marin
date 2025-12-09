import React from "react";
import "./stack.css";

export default function StackTecnologias({ tecnologias }) {

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

      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
        Tecnologías que utilizo actualmente
      </p>

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
