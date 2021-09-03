import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const createStudent = ({ input }) => {
  return db.student.create({
    data: input,
  })
}

export const updateStudent = ({ id, input }) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }) => {
  return db.student.delete({
    where: { id },
  })
}

export const totalStudents = () => {
  return db.student.count()
}

export const Student = {
  courses: (_obj, { root }) =>
    db.student.findUnique({ where: { id: root.id } }).courses(),
  grade: (_obj, { root }) =>
    db.student.findUnique({ where: { id: root.id } }).grade(),
}
