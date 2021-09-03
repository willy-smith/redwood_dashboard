import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CourseForm from 'src/components/Course/CourseForm'

export const QUERY = gql`
  query EditCourseById($id: Int!) {
    course: course(id: $id) {
      id
      title
      description
      courseCode
    }
  }
`
const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourseMutation($id: Int!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      title
      description
      courseCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ course }) => {
  const [updateCourse, { loading, error }] = useMutation(
    UPDATE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Course updated')
        navigate(routes.courses())
      },
    }
  )

  const onSave = (input, id) => {
    updateCourse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Course {course.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CourseForm
          course={course}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
