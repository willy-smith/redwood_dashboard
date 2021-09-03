import { render } from '@redwoodjs/testing/web'

import CardContent from './CardContent'

describe('CardContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardContent />)
    }).not.toThrow()
  })
})
