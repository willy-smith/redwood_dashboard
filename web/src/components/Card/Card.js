import CardContent from '../CardContent/CardContent'
import CoursesCell from '../CoursesCell/CoursesCell'
import StudentsCell from '../StudentsCell/StudentsCell'

const Card = ({ data }) => {
  switch (data) {
    case 'courses':
      return (
        <CardContent>
          <CoursesCell />
        </CardContent>
      )

    case 'students':
      return (
        <CardContent>
          <StudentsCell />
        </CardContent>
      )
    default:
      return (
        <CardContent>
          <p>Hey there is nothing here yet.</p>
        </CardContent>
      )
  }
}

export default Card
