import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 to-blue-600">
      <MetaTags title="Home" />

      <div className="flex-1 mx-8 w-1/4 h-full bg-gray-100 rounded-md p-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-600">Genus</h1>
          <p className="text-md text-gray-500 pt-2">A Better Way to Learn</p>
        </div>
        <Link to={routes.dashboard()} className="flex justify-start mt-4">
          <Button>Log In</Button>
        </Link>
      </div>
      <div className="flex flex-2 justify-center text-yellow-400 brightness-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-wiggle h-1/4 w-1/4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    </div>
  )
}

export default HomePage
