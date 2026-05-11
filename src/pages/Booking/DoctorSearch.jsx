import { useEffect, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import AppLayout from "../../components/Layout/AppLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { doctors } from "../../data/doctors";
import styles from "./Booking.module.css";
import DoctorCardSkeleton from "../../components/DoctorCard/DoctorCardSkeleton";

function DoctorSearch() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout>
      <section className={styles.bookingScreen}>
        {/* Top navigation */}
        <PageHeader title="Reservar cita" backTo="/" />

        {/* Intro section */}
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

        {/* Quick help suggestions */}
        <section className={styles.quickHelp}>
          <p>No sé qué especialidad elegir</p>

          <div className={styles.quickTags}>
            <button>Dolor de cabeza</button>
            <button>Control general</button>
            <button>Ansiedad</button>
            <button>Piel</button>
            <button>Dolor muscular</button>
          </div>
        </section>

        {/* Available doctors */}
        <section className={styles.resultsSection}>
          <div className={styles.sectionHeader}>
            <h2>Horarios disponibles hoy</h2>

            <p>Puedes cambiar o cancelar luego, sin pagar por adelantado</p>
          </div>

          {/* Doctors list */}
          <div className={styles.doctorList}>
            {loading ? (
              <>
                <DoctorCardSkeleton />
                <DoctorCardSkeleton />
                <DoctorCardSkeleton />
              </>
            ) : (
              doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            )}
          </div>
        </section>
      </section>
    </AppLayout>
  );
}

export default DoctorSearch;
