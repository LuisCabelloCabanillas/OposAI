
import { useState } from "react";
import "./RegisterPage.css";

type RegisterPageProps = {
  onBack: () => void;
  onLogin: () => void;
  onSuccess: () => void;
};

export default function RegisterPage({
  onBack,
  onLogin,
  onSuccess,
}: RegisterPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    onSuccess();

    setError(
      "El formulario está preparado. En el siguiente paso conectaremos el registro."
    );
  }

  return (
    <main className="register-page">
      <section className="register-container">
        <button
          type="button"
          className="register-back"
          onClick={onBack}
        >
          ← Volver
        </button>

        <header className="register-header">
          <h1 className="register-logo">
            Opos<span>IA</span>
          </h1>
          <p>Empieza a preparar tu futuro</p>
        </header>

        <div className="register-intro">
          <h2>Crear cuenta</h2>
          <p>Completa tus datos para comenzar.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="register-name">Nombre completo</label>
          <input
            id="register-name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="register-email">Correo electrónico</label>
          <input
            id="register-email"
            type="email"
            placeholder="nombre@ejemplo.com"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="register-password">Contraseña</label>
          <input
            id="register-password"
            type="password"
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label htmlFor="register-confirm-password">
            Confirmar contraseña
          </label>
          <input
            id="register-confirm-password"
            type="password"
            placeholder="Repite tu contraseña"
            autoComplete="new-password"
            minLength={8}
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
          />

          {error && (
            <p className="register-message" role="status">
              {error}
            </p>
          )}

          <button type="submit" className="register-submit">
            Crear cuenta
          </button>
        </form>

        <p className="register-login">
          ¿Ya tienes cuenta?{" "}
          <button type="button" onClick={onLogin}>
            Inicia sesión
          </button>
        </p>
      </section>
    </main>
  );
}
