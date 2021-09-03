import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Student = ({ student }) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{student.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{student.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Completed Courses</th>
              <td>
                <ul>
                  {student.grade.map((grade) => {
                    return (
                      <li className="flex" key={grade.id}>
                        <span className="flex-1">
                          {grade.course.courseCode}
                        </span>
                        <span className="flex-5">
                          <b className="pr-4">Result: </b>
                          {grade.letter}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Student
