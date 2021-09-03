import { Link, routes } from '@redwoodjs/router'
import Button from '../Button/Button'

const Topbar = () => {
  return (
    <div className="bg-gray-200 border-b-4 border-indigo-500 flex justify-end items-center">
      <Link to={routes.home()}>
        <Button>Log Out</Button>
      </Link>
    </div>
  )
}

export default Topbar
