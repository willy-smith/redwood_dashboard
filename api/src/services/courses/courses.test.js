import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'

describe('courses', () => {
  scenario('returns all courses', async (scenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async () => {
    const result = await createCourse({
      input: { title: 'String', description: 'String', courseCode: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.courseCode).toEqual('String')
  })

  scenario('updates a course', async (scenario) => {
    const original = await course({ id: scenario.course.one.id })
    const result = await updateCourse({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a course', async (scenario) => {
    const original = await deleteCourse({ id: scenario.course.one.id })
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
