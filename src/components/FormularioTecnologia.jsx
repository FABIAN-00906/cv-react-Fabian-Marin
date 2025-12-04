// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("frontend");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreTrim = nombre.trim();
    if (!nombreTrim) return;

    const nuevaTecnologia = {
      id: Date.now(),
      nombre: nombreTrim,
      tipo
    };

    onAgregar(nuevaTecnologia);
    setNombre("");
    setTipo("frontend");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h3>Agregar Tecnología</h3>
      <input
        type="text"
        placeholder="Nombre (ej. TypeScript)"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecciona tipo</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="base de datos">Base de datos</option>
        <option value="herramienta">Herramienta</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
}
