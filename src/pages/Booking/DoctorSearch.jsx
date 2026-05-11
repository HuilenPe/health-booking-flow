import { Link } from "react-router-dom"
import PageHeader from "../../components/PageHeader/PageHeader"

import AppLayout from "../../components/Layout/AppLayout"
import { doctors } from "../../data/doctors"
import styles from "./Booking.module.css"

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
              <article key={doctor.id} className={styles.doctorCard}>
                <div className={styles.doctorCardTop}>
                  <img src={doctor.image} alt={doctor.name} />

                  <div className={styles.doctorMainInfo}>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialty}</p>

                    <div className={styles.hospital}>
                      <FiMapPin />
                      <span>
                        {doctor.hospital} · {doctor.city}
                      </span>
                    </div>
                  </div>

                  <div className={styles.ratingBox}>
                    <span>
                      <FiStar /> {doctor.rating}
                    </span>
                    <small>({doctor.reviews})</small>
                  </div>
                </div>

                <div className={styles.badge}>{doctor.badge}</div>

                <Link
                  to={`/reservar/horario/${doctor.id}`}
                  className={styles.reserveButton}
                >
                  Reservar {doctor.nextSlot}
                  <FiChevronRight />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </AppLayout>
  )
}

export default DoctorSearch