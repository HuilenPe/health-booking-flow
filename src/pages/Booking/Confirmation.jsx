import { Link } from "react-router-dom";
import { FiCheckCircle, FiHome } from "react-icons/fi";

import AppLayout from "../../components/Layout/AppLayout";
import AppointmentSummary from "../../components/AppointmentSummary/AppointmentSummary";

import styles from "./Booking.module.css";

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
            Tu reserva fue realizada correctamente. Recibirás un recordatorio
            antes de la cita.
          </p>
        </header>
        {/* Appointment summary */}
        <AppointmentSummary
          date="Martes 20 de diciembre"
          type="Consulta médica presencial"
          time="11:45 AM"
          duration="Duración estimada: 30 minutos"
          hospital="Hospital Clinic"
          address="Carrer de Villarroel, 170, Barcelona"
        />
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
  );
}

export default Confirmation;
