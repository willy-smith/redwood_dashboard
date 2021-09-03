import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const GradesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.grades()} className="rw-link">
            Grades
          </Link>
        </h1>
        <Link to={routes.newGrade()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Grade
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GradesLayout
