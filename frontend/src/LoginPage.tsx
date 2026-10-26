
import { useState } from "react";
import "./LoginPage.css";

type LoginPageProps = {
  onBack: () => void;
  onRegister: () => void;
  onSuccess: () => void;
};

export default function LoginPage({
  onBack,
  onRegister,
  onSuccess,
}: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    // La autenticación real se conectará más adelante.
    setError(
      "El formulario está preparado. En el siguiente paso conectaremos el inicio de sesión."
    );

    onSuccess();
  }

  return (
    <main className="login-page">
      <section className="login-container">
        <button
          type="button"
          className="login-back"
          onClick={onBack}
        >
          ← Volver
        </button>

        <header className="login-header">
          <h1 className="login-logo">
            Opos<span>IA</span>
          </h1>

          <p>Tu futuro empieza aquí</p>
        </header>

        <div className="login-intro">
          <h2>Bienvenido de nuevo</h2>
          <p>Introduce tus datos para acceder a tu cuenta.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">
            Correo electrónico
          </label>

          <input
            id="login-email"
            type="email"
            placeholder="nombre@ejemplo.com"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="login-password">
            Contraseña
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Introduce tu contraseña"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && (
            <p className="login-message" role="status">
              {error}
            </p>
          )}

          <button type="submit" className="login-submit">
            Iniciar sesión
          </button>
        </form>

        <p className="login-register">
          ¿Todavía no tienes cuenta?{" "}
          <button type="button" onClick={onRegister}>
            Crear cuenta
          </button>
        </p>
      </section>
    </main>
  );
}
