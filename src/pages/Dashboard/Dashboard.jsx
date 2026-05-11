import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiPlusCircle,
  FiSettings,
  FiZap,
} from "react-icons/fi";

import AppLayout from "../../components/Layout/AppLayout";
import BottomNav from "../../components/BottomNav/BottomNav";
import {
  expressAppointment,
  upcomingAppointment,
  user,
} from "../../data/dashboard";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <AppLayout>
      <section className={styles.dashboard}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>¡Buenos días, {user.name}!</h1>
            <p className={styles.date}>Lunes 12 de Diciembre 2026 · 11:36 AM</p>
          </div>

          <div className={styles.profile}>
            <img src={user.avatar} alt={user.name} />
            <button
              className={styles.settingsButton}
              aria-label="Abrir configuración"
            >
              <FiSettings />
            </button>
          </div>
        </header>

        <section className={styles.expressSection}>
          <div className={styles.sectionLabel}>
            <FiZap />
            <span>Cita express</span>
            <small>Puedes cambiar o cancelar luego</small>
          </div>

          <article className={styles.expressCard}>
            <img
              src={expressAppointment.image}
              alt={expressAppointment.doctor}
            />

            <div className={styles.expressInfo}>
              <strong>{expressAppointment.doctor}</strong>
              <span>{expressAppointment.specialty}</span>
              <b>{expressAppointment.hospital}</b>
            </div>

            <div className={styles.expressTime}>
              <span>Hoy</span>
              <strong>{expressAppointment.time}</strong>
            </div>

            <FiChevronRight className={styles.chevron} />

            <Link to="/reservar/horario/1" className={styles.expressButton}>
              Reservar ahora
            </Link>
          </article>
        </section>

        <Link to="/reservar" className={styles.newAppointment}>
          <div className={styles.newAppointmentIcon}>
            <FiCalendar />
            <FiPlusCircle className={styles.plusIcon} />
          </div>

          <span>Reservar nueva cita</span>
          <FiChevronRight />
        </Link>

        <p className={styles.helperText}>Te tomará menos de 1 minuto</p>

        <section className={styles.upcomingSection}>
          <h2>Próxima cita</h2>

          <article className={styles.upcomingCard}>
            <div className={styles.clockIcon}>
              <FiClock />
            </div>

            <div className={styles.upcomingContent}>
              <h3>{upcomingAppointment.date}</h3>

              <div className={styles.location}>
                <FiMapPin />
                <div>
                  <strong>{upcomingAppointment.hospital}</strong>
                  <span>{upcomingAppointment.address}</span>
                </div>
              </div>

              <div className={styles.doctorRow}>
                <img
                  src={upcomingAppointment.image}
                  alt={upcomingAppointment.doctor}
                />
                <span>{upcomingAppointment.doctor}</span>
                <small>{upcomingAppointment.specialty}</small>
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

        <BottomNav />
      </section>
    </AppLayout>
  );
}

export default Dashboard;