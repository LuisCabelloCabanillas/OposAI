
import { useState, useEffect } from "react";
import "./App.css";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import SelectionPage from "./SelectionPage";

type Screen = "welcome" | "login" | "register" | "selection";

const navigation = [
  { id: "inicio", label: "Inicio", section: "PRINCIPAL" },
  { id: "temario", label: "Mi temario", section: "ESTUDIO" },
  { id: "tests", label: "Tests de examen", section: "ESTUDIO" },
  { id: "chatbot", label: "Chatbot", section: "ESTUDIO" },
  { id: "estadisticas", label: "Estadísticas", section: "ORGANIZACIÓN" },
];

const topics = [
  { name: "Tema 1. Derechos humanos", progress: 82, status: "En progreso" },
  { name: "Tema 2. Igualdad efectiva", progress: 65, status: "En progreso" },
  { name: "Tema 3. Prevención de riesgos", progress: 40, status: "En progreso" },
  {
    name: "Tema 4. Derecho constitucional",
    progress: 25,
    status: "Pendiente de completar",
  },
];

const frequentTopics = [
  { name: "Constitución Española", questions: 124, percentage: 92 },
  { name: "Derecho Penal", questions: 98, percentage: 78 },
  { name: "Seguridad ciudadana", questions: 86, percentage: 69 },
];

const repeatedQuestions = [
  {
    title: "¿Qué regula el artículo 14 de la Constitución Española?",
    category: "Derecho constitucional",
    difficulty: "Media",
  },
  {
    title: "¿Cuáles son las funciones principales de la Guardia Civil?",
    category: "Conocimiento del cuerpo",
    difficulty: "Media",
  },
  {
    title:
      "¿Qué principios rigen la actuación de las Fuerzas y Cuerpos de Seguridad?",
    category: "Seguridad ciudadana",
    difficulty: "Alta",
  },
];

const sectionTitles: Record<string, { title: string; subtitle: string }> = {
  inicio: {
    title: "Tu preparación",
    subtitle: "Aquí tienes el resumen de tu progreso y los siguientes pasos.",
  },
  temario: {
    title: "Mi temario",
    subtitle: "Organiza los temas y sigue tu avance de estudio.",
  },
  tests: {
    title: "Tests de examen",
    subtitle: "Practica con preguntas y comprueba tus conocimientos.",
  },
  chatbot: {
    title: "Chatbot de estudio",
    subtitle: "Chat con un asistente virtual para resolver dudas y hacer resúmenes.",
  },
  estadisticas: {
    title: "Estadísticas",
    subtitle: "Consulta los indicadores de tu preparación.",
  },
};

function Dashboard() {
  const [activePage, setActivePage] = useState("inicio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = sectionTitles[activePage] ?? sectionTitles.inicio;

  function handleNavigation(id: string) {
    setActivePage(id);
    setSidebarOpen(false);
  }

  return (
    <div className="dashboard-shell">
      {sidebarOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <button
          className="dashboard-brand"
          onClick={() => handleNavigation("inicio")}
          aria-label="Ir al inicio de OposIA"
        >
          <span className="brand-mark">O</span>
          <span className="brand-word">
            Opos<span>IA</span>
          </span>
        </button>

        <div className="sidebar-opposition">
          <span className="sidebar-opposition-label">
            ESTÁS PREPARANDO
          </span>
          <strong>Guardia Civil</strong>
          <span className="sidebar-opposition-status">
            <span className="status-dot" />
            Oposición activa
          </span>
        </div>

        <nav className="sidebar-navigation" aria-label="Navegación principal">
          {["PRINCIPAL", "ESTUDIO", "ORGANIZACIÓN"].map((section) => (
            <div className="nav-section" key={section}>
              <span className="nav-section-label">{section}</span>

              {navigation
                .filter((item) => item.section === section)
                .map((item) => (
                  <button
                    key={item.id}
                    className={`nav-item ${
                      activePage === item.id ? "nav-item-active" : ""
                    }`}
                    onClick={() => handleNavigation(item.id)}
                    aria-current={activePage === item.id ? "page" : undefined}
                  >
                    <span className={`nav-symbol nav-symbol-${item.id}`}>
                      {item.id === "inicio" && "⌂"}
                      {item.id === "temario" && "▤"}
                      {item.id === "tests" && "✓"}
                      {item.id === "chatbot" && "💬"}
                      {item.id === "estadisticas" && "↗"}
                    </span>
                    <span>{item.label}</span>
                    {activePage === item.id && (
                      <span className="nav-active-indicator" />
                    )}
                  </button>
                ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-help">
          <span className="help-kicker">¿NECESITAS AYUDA?</span>
          <strong>Tu objetivo está más cerca.</strong>
          <p>Mantén la constancia y avanza un día más.</p>
          <button onClick={() => handleNavigation("tests")}>
            Practicar tests <span>→</span>
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">OP</div>
          <div className="profile-details">
            <strong>Mi preparación</strong>
            <span>Plan personal</span>
          </div>
          <span className="profile-menu">···</span>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="breadcrumb">
            <span>OposIA</span>
            <span className="breadcrumb-separator">/</span>
            <strong>{currentSection.title}</strong>
          </div>

          <div className="topbar-actions">
            <span className="topbar-date">TU ESPACIO DE ESTUDIO</span>
            <button
              className="topbar-avatar"
              aria-label="Ir al inicio"
              onClick={() => handleNavigation("inicio")}
            >
              OP
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="dashboard-welcome">
            <div>
              <span className="section-eyebrow">
                <span className="eyebrow-line" />
                OPOSICIÓN GUARDIA CIVIL
              </span>
              <h1>
                {currentSection.title}
                <span>.</span>
              </h1>
              <p>{currentSection.subtitle}</p>
            </div>

            <button
              className="primary-button"
              onClick={() =>
                handleNavigation(activePage === "tests" ? "temario" : "tests")
              }
            >
              {activePage === "tests"
                ? "Consultar temario"
                : "Continuar estudiando"}
              <span>→</span>
            </button>
          </section>

          {activePage === "inicio" && (
            <>
              <section
                className="quick-access-section"
                aria-label="Accesos rápidos"
              >
                <div className="quick-access-heading">
                  <span className="panel-kicker">ACCESO RÁPIDO</span>
                  <h2>¿Qué quieres hacer hoy?</h2>
                </div>

                <div className="quick-access-grid">
                  <button
                    className="quick-access-card"
                    onClick={() => handleNavigation("temario")}
                  >
                    <span className="quick-access-icon quick-icon-blue">▤</span>
                    <span className="quick-access-text">
                      <strong>Mi temario</strong>
                      <span>Continúa estudiando los temas de la oposición.</span>
                    </span>
                    <span className="quick-access-arrow">→</span>
                  </button>

                  <button
                    className="quick-access-card"
                    onClick={() => handleNavigation("tests")}
                  >
                    <span className="quick-access-icon quick-icon-green">✓</span>
                    <span className="quick-access-text">
                      <strong>Tests de examen</strong>
                      <span>Practica preguntas y comprueba tus conocimientos.</span>
                    </span>
                    <span className="quick-access-arrow">→</span>
                  </button>

                  <button
                    className="quick-access-card"
                    onClick={() => handleNavigation("chatbot")}
                  >
                    <span className="quick-access-icon quick-icon-purple">💬</span>
                    <span className="quick-access-text">
                      <strong>Chatbot</strong>
                      <small>Resuelve tus dudas con IA</small>
                    </span>
                    <span className="quick-access-arrow">→</span>
                  </button>

                  <button
                    className="quick-access-card"
                    onClick={() => handleNavigation("estadisticas")}
                  >
                    <span className="quick-access-icon quick-icon-purple">↗</span>
                    <span className="quick-access-text">
                      <strong>Estadísticas</strong>
                      <span>Consulta tu progreso y tus resultados.</span>
                    </span>
                    <span className="quick-access-arrow">→</span>
                  </button>
                </div>
              </section>

              <section
                className="dashboard-stats"
                aria-label="Resumen de progreso"
              >
                <article className="stat-card">
                  <div className="stat-card-top">
                    <span className="stat-label">TEMARIO COMPLETADO</span>
                    <span className="stat-icon stat-icon-blue">↗</span>
                  </div>
                  <div className="stat-value">
                    38<span>%</span>
                  </div>
                  <div className="stat-progress-track">
                    <span style={{ width: "38%" }} />
                  </div>
                  <p>Tu progreso general de estudio</p>
                </article>

                <article className="stat-card">
                  <div className="stat-card-top">
                    <span className="stat-label">PREGUNTAS PRACTICADAS</span>
                    <span className="stat-icon stat-icon-violet">✓</span>
                  </div>
                  <div className="stat-value">1.248</div>
                  <p>
                    <span className="stat-highlight">Práctica constante</span>{" "}
                    para afianzar conocimientos
                  </p>
                </article>

                <article className="stat-card">
                  <div className="stat-card-top">
                    <span className="stat-label">PRECISIÓN EN TESTS</span>
                    <span className="stat-icon stat-icon-green">◎</span>
                  </div>
                  <div className="stat-value">
                    76<span>%</span>
                  </div>
                  <p>Porcentaje de respuestas correctas</p>
                </article>

                <article className="stat-card">
                  <div className="stat-card-top">
                    <span className="stat-label">DÍAS DE CONSTANCIA</span>
                    <span className="stat-icon stat-icon-amber">↗</span>
                  </div>
                  <div className="stat-value">
                    12<span> días</span>
                  </div>
                  <p>Un paso más hacia tu objetivo</p>
                </article>
              </section>

              <section className="dashboard-main-grid">
                <article className="panel topics-panel">
                  <div className="panel-heading">
                    <div>
                      <span className="panel-kicker">TU RUTA DE ESTUDIO</span>
                      <h2>Continúa por donde lo dejaste</h2>
                    </div>
                    <button
                      className="text-button"
                      onClick={() => handleNavigation("temario")}
                    >
                      Ver temario <span>→</span>
                    </button>
                  </div>

                  <div className="topic-list">
                    {topics.map((topic, index) => (
                      <div className="topic-row" key={topic.name}>
                        <div className="topic-number">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="topic-info">
                          <div className="topic-title-row">
                            <strong>{topic.name}</strong>
                            <span>{topic.progress}%</span>
                          </div>

                          <div className="topic-progress-track">
                            <span style={{ width: `${topic.progress}%` }} />
                          </div>

                          <span className="topic-status">{topic.status}</span>
                        </div>

                        <button
                          className="topic-action"
                          aria-label={`Estudiar ${topic.name}`}
                          onClick={() => handleNavigation("temario")}
                        >
                          →
                        </button>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="dashboard-bottom-grid">
                <article className="panel frequent-panel">
                  <div className="panel-heading">
                    <div>
                      <span className="panel-kicker">PUNTOS CLAVE</span>
                      <h2>Temas que debes dominar</h2>
                    </div>
                    <button
                      className="text-button"
                      onClick={() => handleNavigation("estadisticas")}
                    >
                      Ver análisis <span>→</span>
                    </button>
                  </div>

                  <div className="frequent-list">
                    {frequentTopics.map((topic, index) => (
                      <div className="frequent-row" key={topic.name}>
                        <span className="frequent-rank">
                          0{index + 1}
                        </span>
                        <div className="frequent-info">
                          <strong>{topic.name}</strong>
                          <span>{topic.questions} preguntas practicadas</span>
                        </div>
                        <div className="frequent-score">
                          <strong>{topic.percentage}%</strong>
                          <span>aciertos</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel questions-panel">
                  <div className="panel-heading">
                    <div>
                      <span className="panel-kicker">REPASO RECOMENDADO</span>
                      <h2>Preguntas para revisar</h2>
                    </div>
                  </div>

                  <div className="question-list">
                    {repeatedQuestions.map((question, index) => (
                      <button
                        className="question-row"
                        key={question.title}
                        onClick={() => handleNavigation("tests")}
                      >
                        <span className="question-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="question-info">
                          <strong>{question.title}</strong>
                          <span>{question.category}</span>
                        </span>
                        <span
                          className={`difficulty difficulty-${question.difficulty.toLowerCase()}`}
                        >
                          {question.difficulty}
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              </section>
            </>
          )}

          {activePage !== "inicio" && (
            <section className="panel placeholder-panel">
              <span className="placeholder-mark">
                {activePage === "temario" && "01"}
                {activePage === "tests" && "02"}
                {activePage === "chatbot" && "03"}
                {activePage === "estadisticas" && "04"}
              </span>
              <span className="panel-kicker">OPOSIA · GUARDIA CIVIL</span>
              <h2>{currentSection.title}</h2>
              <p>
                Esta sección está preparada para desarrollar su funcionalidad
                en el siguiente paso. Puedes volver al inicio desde el menú
                lateral.
              </p>

              {activePage === "temario" && (
                <div className="placeholder-topic-list">
                  {topics.map((topic) => (
                    <div className="placeholder-topic" key={topic.name}>
                      <span>{topic.name}</span>
                      <strong>{topic.progress}%</strong>
                    </div>
                  ))}
                </div>
              )}

              {activePage === "tests" && (
                <div className="placeholder-topic-list">
                  <div className="placeholder-topic">
                    <span>Preguntas disponibles en esta demo</span>
                    <strong>20</strong>
                  </div>
                  <div className="placeholder-topic">
                    <span>Precisión actual</span>
                    <strong>76%</strong>
                  </div>
                </div>
              )}

              <button
                className="primary-button"
                onClick={() => handleNavigation("inicio")}
              >
                Volver al inicio <span>→</span>
              </button>
            </section>
          )}

          <footer className="dashboard-footer">
            <span>
              OPOS<span>IA</span>
            </span>
            <span>Tu esfuerzo. Tu objetivo. Tu futuro.</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [selectedOpposition, setSelectedOpposition] = useState("");

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const previousScreen = event.state?.screen as Screen | undefined;

      setScreen(previousScreen ?? "welcome");
      setSelectedOpposition("");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (nextScreen: Screen) => {
    window.history.pushState(
      { screen: nextScreen },
      "",
      window.location.pathname
    );
    setScreen(nextScreen);
  };

  if (selectedOpposition === "Guardia Civil") {
    return <Dashboard />;
  }

  if (screen === "welcome") {
    return (
      <WelcomePage
        onLogin={() => navigateTo("login")}
        onRegister={() => navigateTo("register")}
      />
    );
  }

  if (screen === "login") {
    return (
      <LoginPage
        onBack={() => navigateTo("welcome")}
        onRegister={() => navigateTo("register")}
        onSuccess={() => navigateTo("selection")}
      />
    );
  }

  if (screen === "register") {
    return (
      <RegisterPage
        onBack={() => navigateTo("welcome")}
        onLogin={() => navigateTo("login")}
        onSuccess={() => navigateTo("selection")}
      />
    );
  }

  return <SelectionPage onSelectOpposition={setSelectedOpposition} />;
}
