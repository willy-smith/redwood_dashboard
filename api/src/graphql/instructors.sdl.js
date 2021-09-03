export const schema = gql`
  type Instructor {
    id: Int!
    firstName: String!
    lastName: String!
    courses: [Course]!
  }

  type Query {
    instructors: [Instructor!]!
  }

  input CreateInstructorInput {
    firstName: String!
    lastName: String!
  }

  input UpdateInstructorInput {
    firstName: String
    lastName: String
  }
`
