export default function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>Experiencia</h3>
      {experiencias.map((exp) => (
        <div key={exp.cargo + exp.periodo}>
          <strong>{exp.cargo}</strong> – {exp.empresa}
          <br />
          <small>{exp.periodo}</small>
        </div>
      ))}
    </section>
  );
}
