function DoctorCardSkeleton() {
  return (
    <article className="doctor-card-skeleton">
      <div className="doctor-card-skeleton__top">
        <div className="doctor-card-skeleton__avatar" />

        <div className="doctor-card-skeleton__content">
          <div className="doctor-card-skeleton__line doctor-card-skeleton__line--title" />

          <div className="doctor-card-skeleton__line doctor-card-skeleton__line--small" />

          <div className="doctor-card-skeleton__line doctor-card-skeleton__line--medium" />
        </div>
      </div>

      <div className="doctor-card-skeleton__button" />
    </article>
  )
}

export default DoctorCardSkeleton