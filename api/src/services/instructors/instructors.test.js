import { instructors } from './instructors'

describe('instructors', () => {
  scenario('returns all instructors', async (scenario) => {
    const result = await instructors()

    expect(result.length).toEqual(Object.keys(scenario.instructor).length)
  })
})
