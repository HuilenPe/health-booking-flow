import { FiMapPin, FiSearch } from "react-icons/fi";

import AppLayout from "../../components/Layout/AppLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

import { doctors } from "../../data/doctors";
import styles from "./Booking.module.css";

function DoctorSearch() {
  return (
    <AppLayout>
      <section className={styles.bookingScreen}>
        {/* Header */}
        <PageHeader title="Reservar cita" backTo="/" />

        {/* Intro */}
        <section className={styles.intro}>
          <h2>Elige médico o especialidad</h2>
          <p>En tu centro de salud favorito</p>
        </section>

        {/* Search controls */}
        <div className={styles.searchRow}>
          <label className={styles.searchBox}>
            <FiSearch />
            <input type="text" placeholder="Buscar especialidad o médico..." />
          </label>

          <button className={styles.locationButton}>
            <FiMapPin />
            <span>Barcelona</span>
          </button>
        </div>

        {/* Available doctors */}
        <section className={styles.resultsSection}>
          <div className={styles.sectionHeader}>
            <h2>Horarios disponibles hoy</h2>
            <p>Puedes cambiar o cancelar luego, sin pagar por adelantado</p>
          </div>

          <div className={styles.doctorList}>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </section>
      </section>
    </AppLayout>
  );
}

export default DoctorSearch;
