import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Grade/GradesCell'

const DELETE_GRADE_MUTATION = gql`
  mutation DeleteGradeMutation($id: Int!) {
    deleteGrade(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const GradesList = ({ grades }) => {
  const [deleteGrade] = useMutation(DELETE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('Grade deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete grade ' + id + '?')) {
      deleteGrade({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Letter</th>
            <th>Percent</th>
            <th>Course id</th>
            <th>Student id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{truncate(grade.id)}</td>
              <td>{truncate(grade.letter)}</td>
              <td>{truncate(grade.percent)}</td>
              <td>{truncate(grade.courseId)}</td>
              <td>{truncate(grade.studentId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.grade({ id: grade.id })}
                    title={'Show grade ' + grade.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGrade({ id: grade.id })}
                    title={'Edit grade ' + grade.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete grade ' + grade.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(grade.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GradesList
