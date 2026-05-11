import { Link, useParams } from "react-router-dom"
import { FiMapPin } from "react-icons/fi"

import AppLayout from "../../components/Layout/AppLayout"
import { doctors } from "../../data/doctors"
import styles from "./Booking.module.css"
import PageHeader from "../../components/PageHeader/PageHeader"

const dates = [
  { day: "Lun", number: "12" },
  { day: "Mar", number: "13" },
  { day: "Mié", number: "14" },
  { day: "Jue", number: "15" },
]

const timeSlots = ["09:30", "10:00", "11:45", "13:15", "16:00", "18:45"]

function DateTime() {
  const { doctorId } = useParams()
  const doctor = doctors.find((item) => item.id === doctorId)

  if (!doctor) {
    return (
      <AppLayout>
        <section className={styles.bookingScreen}>
          <p>No encontramos este médico.</p>
          <Link to="/reservar">Volver a buscar</Link>
        </section>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <section className={styles.bookingScreen}>
        {/* Header */}
<PageHeader title="Elegir horario" backTo="/reservar" />

        {/* Doctor summary */}
        <article className={styles.selectedDoctorCard}>
          <img src={doctor.image} alt={doctor.name} />

          <div>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty} · 30 min</p>

            <span>
              <FiMapPin />
              {doctor.hospital}
            </span>
          </div>
        </article>

        {/* Date selector */}
        <section className={styles.timeSection}>
          <h2>Selecciona una fecha</h2>

          <div className={styles.dateList}>
            {dates.map((date, index) => (
              <button
                key={date.number}
                className={`${styles.dateButton} ${
                  index === 1 ? styles.selectedDate : ""
                }`}
              >
                <span>{date.day}</span>
                <strong>{date.number}</strong>
              </button>
            ))}
          </div>
        </section>

        {/* Time selector */}
        <section className={styles.timeSection}>
          <h2>Horarios disponibles</h2>
          <p>Los horarios se muestran en tu zona horaria local.</p>

          <div className={styles.slotGrid}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.timeSlot} ${
                  slot === doctor.nextSlot ? styles.selectedSlot : ""
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </section>

        {/* Continue */}
        <Link
          to="/reservar/confirmacion"
          className={styles.primaryFullButton}
        >
          Confirmar horario
        </Link>
      </section>
    </AppLayout>
  )
}

export default DateTime
