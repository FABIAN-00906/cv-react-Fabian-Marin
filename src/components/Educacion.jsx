export default function Educacion({ estudios, talleres = [] }) {
  return (
    <section>
      <h3>Educación</h3>
      {estudios.map((e) => (
        <div key={e.titulo + e.institucion}>
          <strong>{e.titulo}</strong> – {e.institucion}
          <br />
          <small>{e.periodo}</small>
        </div>
      ))}

      {talleres.length > 0 && (
        <>
          <h4>Talleres</h4>
          {talleres.map((t) => (
            <div key={t.nombre + t.institucion}>
              {t.nombre} — <small>{t.institucion} ({t.periodo})</small>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
