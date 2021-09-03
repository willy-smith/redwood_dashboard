import { render } from '@redwoodjs/testing/web'

import Content from './Content'

describe('Content', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Content />)
    }).not.toThrow()
  })
})
