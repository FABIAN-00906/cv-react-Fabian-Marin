// src/components/Habilidades.jsx
export default function Habilidades({ habilidades = [] }) {
  return (
    <section>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}
