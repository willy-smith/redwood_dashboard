export const schema = gql`
  type Grade {
    id: Int!
    letter: String!
    percent: Int!
    course: Course!
    courseId: Int!
    student: Student!
    studentId: Int!
  }

  type Query {
    grades: [Grade!]!
    grade(id: Int!): Grade
  }

  input CreateGradeInput {
    letter: String!
    percent: Int!
    courseId: Int!
    studentId: Int!
  }

  input UpdateGradeInput {
    letter: String
    percent: Int
    courseId: Int
    studentId: Int
  }

  type Mutation {
    createGrade(input: CreateGradeInput!): Grade!
    updateGrade(id: Int!, input: UpdateGradeInput!): Grade!
    deleteGrade(id: Int!): Grade!
  }
`
