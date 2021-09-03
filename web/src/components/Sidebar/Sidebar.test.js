import { render } from '@redwoodjs/testing/web'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sidebar />)
    }).not.toThrow()
  })
})
