import { Link } from "react-router-dom"

function Button({ children, to, variant = "primary", className = "", ...props }) {
  const classes = `button button--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button