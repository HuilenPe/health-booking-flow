import { Link } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"

function PageHeader({ title, backTo = "/" }) {
  return (
    <header className="page-header">
      <Link to={backTo} className="page-header__back" aria-label="Volver">
        <FiChevronLeft />
      </Link>

      <h1>{title}</h1>

      <div aria-hidden="true" />
    </header>
  )
}

export default PageHeader