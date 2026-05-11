import { Link } from "react-router-dom";
import { FiChevronRight, FiMapPin, FiStar } from "react-icons/fi";

function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">
      <div className="doctor-card__top">
        <img src={doctor.image} alt={doctor.name} />

        <div className="doctor-card__info">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>

          <div className="doctor-card__hospital">
            <FiMapPin />
            <span>
              {doctor.hospital} · {doctor.city}
            </span>
          </div>
        </div>

        <div className="doctor-card__rating">
          <span>
            <FiStar /> {doctor.rating}
          </span>
          <small>({doctor.reviews})</small>
        </div>
      </div>

      <div className="doctor-card__badge">{doctor.badge}</div>

      {doctor.nextSlot ? (
        <Link
          to={`/reservar/horario/${doctor.id}`}
          className="doctor-card__button"
        >
          Reservar {doctor.nextSlot}
          <FiChevronRight />
        </Link>
      ) : (
        <button
          className="
      doctor-card__button
      doctor-card__button--disabled
    "
        >
          Sin horarios disponibles
        </button>
      )}
    </article>
  );
}

export default DoctorCard;
