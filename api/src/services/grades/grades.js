import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const grades = () => {
  return db.grade.findMany()
}

export const grade = ({ id }) => {
  return db.grade.findUnique({
    where: { id },
  })
}

export const createGrade = ({ input }) => {
  return db.grade.create({
    data: input,
  })
}

export const updateGrade = ({ id, input }) => {
  return db.grade.update({
    data: input,
    where: { id },
  })
}

export const deleteGrade = ({ id }) => {
  return db.grade.delete({
    where: { id },
  })
}

export const Grade = {
  course: (_obj, { root }) =>
    db.grade.findUnique({ where: { id: root.id } }).course(),
  student: (_obj, { root }) =>
    db.grade.findUnique({ where: { id: root.id } }).student(),
}
