import { render } from '@redwoodjs/testing/web'

import Topbar from './Topbar'

describe('Topbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Topbar />)
    }).not.toThrow()
  })
})
