import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CoursesQuery {
    courses {
      id
      title
      description
      studentsCount
    }
    studentsCount {
      id
      title
      courseCode
      _count {
        students
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ studentsCount }) => {
  const studentsCountCopy = [...studentsCount]
  return (
    <>
      <h2 className="font-semibold w-full bg-gradient-to-b from-indigo-700 to-blue-700 text-white p-4 rounded-t">
        <span>Most Popular Courses</span>
      </h2>

      <div className="p-4">
        <ul>
          {studentsCountCopy
            .sort((a, b) => b._count.students - a._count.students)
            .slice(0, 3)
            .map((course, index) => {
              return (
                <li key={course.id} className="py-2 text-md text-gray-600">
                  <Link to={routes.course({ id: course.id })} className="flex">
                    <span className="flex-1">{index + 1}</span>
                    <h2 className="flex-4 font-bold">{course.title}</h2>
                    <span className="flex-1">
                      {course._count.students} students
                    </span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}
