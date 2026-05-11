import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi"

function AppointmentSummary({
  date,
  type,
  time,
  duration,
  hospital,
  address,
}) {
  return (
    <article className="appointment-summary">
      <div className="appointment-summary__row">
        <FiCalendar />

        <div>
          <strong>{date}</strong>
          <span>{type}</span>
        </div>
      </div>

      <div className="appointment-summary__row">
        <FiClock />

        <div>
          <strong>{time}</strong>
          <span>{duration}</span>
        </div>
      </div>

      <div className="appointment-summary__row">
        <FiMapPin />

        <div>
          <strong>{hospital}</strong>
          <span>{address}</span>
        </div>
      </div>
    </article>
  )
}

export default AppointmentSummary