// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import GradesLayout from 'src/layouts/GradesLayout'
import StudentsLayout from 'src/layouts/StudentsLayout'
import CoursesLayout from 'src/layouts/CoursesLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={DashboardLayout}>
        <Route path="/admin" page={DashboardPage} name="dashboard" />
        <Set wrap={CoursesLayout}>
          <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
          <Route path="/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
          <Route path="/courses/{id:Int}" page={CourseCoursePage} name="course" />
          <Route path="/courses" page={CourseCoursesPage} name="courses" />
        </Set>
        <Set wrap={GradesLayout}>
          <Route path="/grades/new" page={GradeNewGradePage} name="newGrade" />
          <Route path="/grades/{id:Int}/edit" page={GradeEditGradePage} name="editGrade" />
          <Route path="/grades/{id:Int}" page={GradeGradePage} name="grade" />
          <Route path="/grades" page={GradeGradesPage} name="grades" />
        </Set>
        <Set wrap={StudentsLayout}>
          <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
          <Route path="/students/{id:Int}/edit" page={StudentEditStudentPage} name="editStudent" />
          <Route path="/students/{id:Int}" page={StudentStudentPage} name="student" />
          <Route path="/students" page={StudentStudentsPage} name="students" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
