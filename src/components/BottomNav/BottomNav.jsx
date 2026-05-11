import {
  FaCalendarAlt,
  FaCommentAlt,
  FaHeart,
  FaHome,
} from "react-icons/fa"

/**
 * BottomNav
 *
 * Mobile-first bottom navigation.
 * Shared across the healthcare booking flow.
 */
function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <a className="bottom-nav__item bottom-nav__item--active">
        <FaHome />
        <span>Inicio</span>
      </a>

      <a className="bottom-nav__item">
        <FaHeart />
        <span>Mi salud</span>
      </a>

      <a className="bottom-nav__item">
        <FaCommentAlt />
        <span>Mensajes</span>
      </a>

      <a className="bottom-nav__item">
        <FaCalendarAlt />
        <span>Agenda</span>
      </a>
    </nav>
  )
}

export default BottomNav