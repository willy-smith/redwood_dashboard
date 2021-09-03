import { render } from '@redwoodjs/testing/web'

import LinkList from './LinkList'

describe('LinkList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkList />)
    }).not.toThrow()
  })
})
