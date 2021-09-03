import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query StudentsQuery {
    students {
      id
      firstName
      lastName
      createdAt
    }
    totalStudents
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ students, totalStudents }) => {
  return (
    <div>
      <div>
        <h2 className="font-semibold w-full bg-gradient-to-b from-indigo-700 to-blue-700 text-white p-4 rounded-t">
          {totalStudents} Students
        </h2>
      </div>
      <div className="p-4">
        <ul>
          {students.map((student) => {
            return (
              <li key={student.id} className="flex justify-between py-1">
                <Link to={routes.student({ id: student.id })}>
                  {student.firstName} {student.lastName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
