export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header className="cabecera">
      <img
        src={contacto.foto}
        alt="Foto de perfil"
        className="foto-perfil"
      />
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>{ciudad}</p>
    </header>
  );
}
