import { render } from '@redwoodjs/testing/web'

import CardList from './CardList'

describe('CardList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardList />)
    }).not.toThrow()
  })
})
