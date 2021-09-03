import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const CoursesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.courses()} className="rw-link">
            Courses
          </Link>
        </h1>
        <Link to={routes.newCourse()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Course
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoursesLayout
