import "./SelectionPage.css";

type SelectionPageProps = {
  onSelectOpposition: (opposition: string) => void;
};

type Opposition = {
  name: string;
  description: string;
  tag: string;
  active: boolean;
  image: string;
};

const oppositions: Opposition[] = [
  {
    name: "Guardia Civil",
    description: "Prepárate para las pruebas de acceso al cuerpo.",
    tag: "Disponible",
    active: true,
    image: "/images/guardia-civil.png",
  },
  {
    name: "Policía Nacional",
    description: "Organiza tu preparación para el acceso al cuerpo.",
    tag: "Próximamente",
    active: false,
    image: "/images/policia-nacional.png",
  },
  {
    name: "Policía Local",
    description: "Prepara las pruebas de acceso a tu convocatoria.",
    tag: "Próximamente",
    active: false,
    image: "/images/policia-local.png",
  },
];

export default function SelectionPage({
  onSelectOpposition,
}: SelectionPageProps) {
  return (
    <main className="selection-page">
      <header className="selection-header">
        <div className="selection-brand">
          <div className="selection-logo">O</div>
          <span>
            Opos<span className="selection-brand-blue">IA</span>
          </span>
        </div>

        <span className="selection-header-label">
          Tu futuro empieza aquí
        </span>
      </header>

      <section className="selection-hero">
        <span className="selection-eyebrow">
          TU PREPARACIÓN, A OTRO NIVEL
        </span>

        <h1>
          Elige tu próxima
          <br />
          <span>oposición</span>
        </h1>

        <p>
          Un camino claro, un plan personalizado y las herramientas
          que necesitas para alcanzar tu objetivo.
        </p>
      </section>

      <section className="selection-content">
        <div className="selection-section-heading">
          <div>
            <h2>¿Qué oposición vas a preparar?</h2>
            <p>Selecciona una opción para comenzar.</p>
          </div>

          <span className="selection-count">
            {oppositions.length} opciones
          </span>
        </div>

        <div className="opposition-grid">
          {oppositions.map((opposition) => (
            <button
              type="button"
              key={opposition.name}
              className={`opposition-card ${
                opposition.active ? "active" : "disabled"
              }`}
              style={{
                backgroundImage: `url("${opposition.image}")`,
              }}
              onClick={() => {
                if (opposition.active) {
                  onSelectOpposition(opposition.name);
                }
              }}
              disabled={!opposition.active}
              aria-label={`${opposition.name}: ${opposition.tag}`}
            >
              <span
                className={`opposition-tag ${
                  opposition.active ? "tag-active" : ""
                }`}
              >
                {opposition.tag}
              </span>

              <div className="opposition-card-content">
                <h2>{opposition.name}</h2>
                <p>{opposition.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer className="selection-footer">
        <span>OPOSIA</span>
        <span>Tu esfuerzo. Tu objetivo. Tu futuro.</span>
      </footer>
    </main>
  );
}
