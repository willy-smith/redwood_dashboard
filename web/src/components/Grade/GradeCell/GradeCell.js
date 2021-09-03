import Grade from 'src/components/Grade/Grade'

export const QUERY = gql`
  query FindGradeById($id: Int!) {
    grade: grade(id: $id) {
      id
      letter
      percent
      courseId
      studentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Grade not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ grade }) => {
  return <Grade grade={grade} />
}
