import Card from '../Card/Card'

const CardList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Card data={'courses'} />
      <Card data={'students'} />
    </div>
  )
}

export default CardList
