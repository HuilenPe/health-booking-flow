import { Link } from "react-router-dom"
import { FiCalendar, FiChevronRight, FiClock, FiMapPin, FiPlusCircle, FiSettings, FiZap } from "react-icons/fi"
import { FaHome, FaHeart, FaCommentAlt, FaCalendarAlt } from "react-icons/fa"

import AppLayout from "../../components/Layout/AppLayout"
import styles from "./Dashboard.module.css"

function Dashboard() {
  return (
    <AppLayout>
      <section className={styles.dashboard}>
        {/* Header principal del usuario */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>¡Buenos días, María José!</h1>
            <p className={styles.date}>Lunes 12 de Diciembre 2026 · 11:36 AM</p>
          </div>

          <div className={styles.profile}>
            <img src="https://i.pravatar.cc/100?img=47" alt="María José" />
            <button className={styles.settingsButton} aria-label="Abrir configuración">
              <FiSettings />
            </button>
          </div>
        </header>

        {/* Cita rápida */}
        <section className={styles.expressSection}>
          <div className={styles.sectionLabel}>
            <FiZap />
            <span>Cita express</span>
            <small>Puedes cambiar o cancelar luego</small>
          </div>

          <article className={styles.expressCard}>
            <img src="https://i.pravatar.cc/120?img=32" alt="Dr. Juan Ambrosio" />

            <div className={styles.expressInfo}>
              <strong>Dr. Juan Ambrosio</strong>
              <span>Médico de familia</span>
              <b>Hospital Clinic</b>
            </div>

            <div className={styles.expressTime}>
              <span>Hoy</span>
              <strong>16:00</strong>
            </div>

            <FiChevronRight className={styles.chevron} />

            <Link to="/reservar/horario/1" className={styles.expressButton}>
              Reservar ahora
            </Link>
          </article>
        </section>

        {/* CTA principal */}
        <Link to="/reservar" className={styles.newAppointment}>
          <div className={styles.newAppointmentIcon}>
            <FiCalendar />
            <FiPlusCircle className={styles.plusIcon} />
          </div>

          <span>Reservar nueva cita</span>
          <FiChevronRight />
        </Link>

        <p className={styles.helperText}>Te tomará menos de 1 minuto</p>

        {/* Próxima cita */}
        <section className={styles.upcomingSection}>
          <h2>Próxima cita</h2>

          <article className={styles.upcomingCard}>
            <div className={styles.clockIcon}>
              <FiClock />
            </div>

            <div className={styles.upcomingContent}>
              <h3>Martes 20 Diciembre · 11:45 am</h3>

              <div className={styles.location}>
                <FiMapPin />
                <div>
                  <strong>Hospital Clinic</strong>
                  <span>Carrer de Villarroel, 170, 08036 Barcelona</span>
                </div>
              </div>

              <div className={styles.doctorRow}>
                <img src="https://i.pravatar.cc/80?img=44" alt="Dra. Yanina Crespo" />
                <span>Dra. Yanina Crespo</span>
                <small>Cardióloga</small>
              </div>

              <div className={styles.actions}>
                <button>Reprogramar</button>
                <button className={styles.cancelButton}>Cancelar</button>
              </div>
            </div>
          </article>

          <p className={styles.repeatText}>
            Suele consultar cardiología. <button>Repetir cita</button>
          </p>
        </section>

        {/* Navegación inferior */}
        <nav className={styles.bottomNav} aria-label="Navegación principal">
          <a className={styles.active}>
            <FaHome />
            <span>Inicio</span>
          </a>
          <a>
            <FaHeart />
            <span>Mi salud</span>
          </a>
          <a>
            <FaCommentAlt />
            <span>Mensajes</span>
          </a>
          <a>
            <FaCalendarAlt />
            <span>Agenda</span>
          </a>
        </nav>
      </section>
    </AppLayout>
  )
}

export default Dashboard