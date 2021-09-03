import Course from 'src/components/Course/Course'

export const QUERY = gql`
  query FindCourseById($id: Int!) {
    course: course(id: $id) {
      id
      title
      description
      courseCode
      studentsCount
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Course not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ course }) => {
  return <Course course={course} />
}
