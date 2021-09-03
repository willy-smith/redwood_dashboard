import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const instructors = () => {
  return db.instructor.findMany()
}

export const Instructor = {
  courses: (_obj, { root }) =>
    db.instructor.findUnique({ where: { id: root.id } }).courses(),
}
