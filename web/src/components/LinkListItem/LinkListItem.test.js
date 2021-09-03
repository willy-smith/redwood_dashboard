import { render } from '@redwoodjs/testing/web'

import LinkListItem from './LinkListItem'

describe('LinkListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkListItem />)
    }).not.toThrow()
  })
})
