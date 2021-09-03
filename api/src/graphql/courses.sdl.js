export const schema = gql`
  type Course {
    id: Int!
    title: String!
    description: String!
    courseCode: String!
    grades: [Grade]!
    instructors: [Instructor]!
    students: [Student]!
    studentsCount: Int!
  }

  type Query {
    totalCourses: Int!
    studentsCount: [CourseEnrolment!]!
    courses: [Course!]!
    course(id: Int!): Course
  }

  type CourseEnrolment {
    id: Int!
    title: String!
    courseCode: String!
    _count: Count!
  }

  type Count {
    students: Int!
  }

  input CreateCourseInput {
    title: String!
    description: String!
    courseCode: String!
  }

  input UpdateCourseInput {
    title: String
    description: String
    courseCode: String
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course!
    updateCourse(id: Int!, input: UpdateCourseInput!): Course!
    deleteCourse(id: Int!): Course!
  }
`
