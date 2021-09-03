import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const courses = () => {
  return db.course.findMany()
}

export const course = ({ id }) => {
  return db.course.findUnique({
    where: { id },
  })
}

export const createCourse = ({ input }) => {
  return db.course.create({
    data: input,
  })
}

export const updateCourse = ({ id, input }) => {
  return db.course.update({
    data: input,
    where: { id },
  })
}

export const deleteCourse = ({ id }) => {
  return db.course.delete({
    where: { id },
  })
}

export const totalCourses = () => {
  return db.course.count()
}

export const studentsCount = () => {
  return db.course.findMany({
    include: {
      _count: {
        select: {
          students: true,
        },
      },
    },
  })
}

export const Course = {
  grades: (_obj, { root }) =>
    db.course.findUnique({ where: { id: root.id } }).grades(),
  instructors: (_obj, { root }) =>
    db.course.findUnique({ where: { id: root.id } }).instructors(),
  students: (_obj, { root }) =>
    db.course.findUnique({ where: { id: root.id } }).students(),
  studentsCount: async (_obj, { root }) => {
    const studentsCount = await db.course.findUnique({
      where: { id: root.id },
      select: {
        _count: {
          select: {
            students: true,
          },
        },
      },
    })
    return studentsCount._count.students
  },
}
