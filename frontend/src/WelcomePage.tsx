import "./WelcomePage.css";

type WelcomePageProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export default function WelcomePage({
  onLogin,
  onRegister,
}: WelcomePageProps) {
  return (
    <main className="welcome-page">
      <section className="welcome-content">
        <h1 className="welcome-logo">
          Opos<span>IA</span>
        </h1>

        <p className="welcome-subtitle">
          Tu esfuerzo. Tu objetivo. Tu futuro.
        </p>

        <div className="welcome-actions">
          <button
            type="button"
            className="welcome-button welcome-button-primary"
            onClick={onLogin}
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="welcome-button welcome-button-secondary"
            onClick={onRegister}
          >
            Crear cuenta
          </button>
        </div>
      </section>
    </main>
  );
}
