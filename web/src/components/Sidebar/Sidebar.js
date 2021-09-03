import { Link, routes } from '@redwoodjs/router'
import LinkList from '../LinkList/LinkList'

const Sidebar = () => {
  return (
    <div className="flex-1 h-screen bg-gray-600 sticky top-0 text-gray-100">
      <div>
        <Link
          to={routes.home()}
          className="transition duration-300 ease-in-out hover:scale-105 flex items-center py-8 px-8 hover:text-white font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-4 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span>Genus</span>
        </Link>
        <LinkList />
      </div>
    </div>
  )
}

export default Sidebar
