import { Link, routes } from '@redwoodjs/router'
import LinkListItem from '../LinkListItem/LinkListItem'

const LinkList = () => {
  return (
    <div className="py-2 container mx-auto pl-6">
      <ul>
        <LinkListItem>
          <Link to={routes.dashboard()}>Dashboard</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to={routes.courses()}>Courses</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to={routes.students()}>Students</Link>
        </LinkListItem>
        <LinkListItem>
          <Link to={routes.grades()}>Grades</Link>
        </LinkListItem>
      </ul>
    </div>
  )
}

export default LinkList
