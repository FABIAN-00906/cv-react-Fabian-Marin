
import React from "react";

export default function Educacion() {
  const formacionAcademica = [
    { id: 1, titulo: "Técnico en Programación de Software", institucion: "SENA", periodo: "2024" },
    { id: 2, titulo: "Bachiller Académico", institucion: "Institución Educativa FESA", periodo: "2024" }
  ];

  const formacionComplementaria = [
    { id: 1, nombre: "Curso Básico de React", institucion: "Udemy", periodo: "2024" },
    { id: 2, nombre: "Fundamentos de Bases de Datos", institucion: "Platzi", periodo: "2023" },
    { id: 3, nombre: "Git y GitHub Profesional", institucion: "SENA virtual", periodo: "2024" }
  ];

  const referencias = [
    { id: 1, nombre: "Jhojan Suárez", cargo: "Auxiliar en electricidad", telefono: "310 000 0000" },
    { id: 2, nombre: "Kelly Andrea Marín Montoya", cargo: "Ingeniera Civil", telefono: "320 000 0000" }
  ];

  return (
    <section>
      <h3>Formación Académica</h3>

      <ul>
        {formacionAcademica.map((f) => (
          <li key={f.id}>
            <strong>{f.titulo}</strong> – {f.institucion} ({f.periodo})
          </li>
        ))}
      </ul>

      <h3>Formación Complementaria</h3>
      <ul>
        {formacionComplementaria.map((c) => (
          <li key={c.id}>
            <strong>{c.nombre}</strong> – {c.institucion} ({c.periodo})
          </li>
        ))}
      </ul>

      <h3>Referencias</h3>
      <ul>
        {referencias.map((r) => (
          <li key={r.id}>
            {r.nombre} – {r.cargo} – Tel: {r.telefono}
          </li>
        ))}
      </ul>

      <p>© 2025 Fabián Marín — Hoja de Vida</p>
    </section>
  );
}
