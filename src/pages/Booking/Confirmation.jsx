import { Link } from "react-router-dom"
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiMapPin,
} from "react-icons/fi"

import AppLayout from "../../components/Layout/AppLayout"
import styles from "./Booking.module.css"

function Confirmation() {
  return (
    <AppLayout>
      <section className={styles.confirmationScreen}>
        {/* Success icon */}
        <div className={styles.successIcon}>
          <FiCheckCircle />
        </div>

        {/* Main message */}
        <header className={styles.confirmationHeader}>
          <h1>¡Cita confirmada!</h1>

          <p>
            Tu reserva fue realizada correctamente.
            Recibirás un recordatorio antes de la cita.
          </p>
        </header>

        {/* Appointment summary */}
        <article className={styles.summaryCard}>
          <div className={styles.summaryRow}>
            <FiCalendar />

            <div>
              <strong>Martes 20 de diciembre</strong>
              <span>Consulta médica presencial</span>
            </div>
          </div>

          <div className={styles.summaryRow}>
            <FiClock />

            <div>
              <strong>11:45 AM</strong>
              <span>Duración estimada: 30 minutos</span>
            </div>
          </div>

          <div className={styles.summaryRow}>
            <FiMapPin />

            <div>
              <strong>Hospital Clinic</strong>

              <span>
                Carrer de Villarroel, 170,
                Barcelona
              </span>
            </div>
          </div>
        </article>

        {/* Doctor info */}
        <section className={styles.confirmDoctor}>
          <img
            src="https://i.pravatar.cc/120?img=44"
            alt="Dra. Yanina Crespo"
          />

          <div>
            <h2>Dra. Yanina Crespo</h2>
            <p>Cardióloga</p>
          </div>
        </section>

        {/* Actions */}
        <div className={styles.confirmationActions}>
          <button className={styles.secondaryButton}>
            Añadir al calendario
          </button>

          <Link to="/" className={styles.primaryFullButton}>
            <FiHome />
            Volver al inicio
          </Link>
        </div>
      </section>
    </AppLayout>
  )
}

export default Confirmation
