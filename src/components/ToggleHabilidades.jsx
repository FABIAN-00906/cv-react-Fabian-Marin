import React from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ habilidades, mostrar, onToggle }) {
  return (
    <section>
      <button onClick={onToggle}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
