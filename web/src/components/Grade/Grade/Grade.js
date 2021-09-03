import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_GRADE_MUTATION = gql`
  mutation DeleteGradeMutation($id: Int!) {
    deleteGrade(id: $id) {
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

const Grade = ({ grade }) => {
  const [deleteGrade] = useMutation(DELETE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('Grade deleted')
      navigate(routes.grades())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete grade ' + id + '?')) {
      deleteGrade({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Grade {grade.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{grade.id}</td>
            </tr>
            <tr>
              <th>Letter</th>
              <td>{grade.letter}</td>
            </tr>
            <tr>
              <th>Percent</th>
              <td>{grade.percent}</td>
            </tr>
            <tr>
              <th>Course id</th>
              <td>{grade.courseId}</td>
            </tr>
            <tr>
              <th>Student id</th>
              <td>{grade.studentId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGrade({ id: grade.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(grade.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Grade
