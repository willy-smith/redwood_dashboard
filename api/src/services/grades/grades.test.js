import { grades, grade, createGrade, updateGrade, deleteGrade } from './grades'

describe('grades', () => {
  scenario('returns all grades', async (scenario) => {
    const result = await grades()

    expect(result.length).toEqual(Object.keys(scenario.grade).length)
  })

  scenario('returns a single grade', async (scenario) => {
    const result = await grade({ id: scenario.grade.one.id })

    expect(result).toEqual(scenario.grade.one)
  })

  scenario('creates a grade', async (scenario) => {
    const result = await createGrade({
      input: {
        letter: 'String',
        percent: 3972847,
        courseId: scenario.grade.two.courseId,
        studentId: scenario.grade.two.studentId,
      },
    })

    expect(result.letter).toEqual('String')
    expect(result.percent).toEqual(3972847)
    expect(result.courseId).toEqual(scenario.grade.two.courseId)
    expect(result.studentId).toEqual(scenario.grade.two.studentId)
  })

  scenario('updates a grade', async (scenario) => {
    const original = await grade({ id: scenario.grade.one.id })
    const result = await updateGrade({
      id: original.id,
      input: { letter: 'String2' },
    })

    expect(result.letter).toEqual('String2')
  })

  scenario('deletes a grade', async (scenario) => {
    const original = await deleteGrade({ id: scenario.grade.one.id })
    const result = await grade({ id: original.id })

    expect(result).toEqual(null)
  })
})
