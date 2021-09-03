import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Course/CoursesCell'
import Table from 'src/components/Table/Table'
import { useEffect, useMemo, useState } from 'react'

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($id: Int!) {
    deleteCourse(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 50

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CoursesList = ({ courses }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(courses)
  }, [courses])

  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.course({ id: original.id })}>{value}</Link>
        ),
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.course({ id: original.id })}>{truncate(value)}</Link>
        ),
      },
      {
        Header: 'Course Code',
        accessor: 'courseCode',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.course({ id: original.id })}>{value}</Link>
        ),
      },
      {
        Header: '# of Students',
        accessor: `studentsCount`,
      },
    ],
    []
  )

  return (
    <div>
      <Table columns={columns} data={data} filter={'title'} />
    </div>
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Course code</th>
    //         <th># of Students</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {courses.map((course) => (
    //         <tr key={course.id}>
    //           <td>{truncate(course.id)}</td>
    //           <td>{truncate(course.title)}</td>
    //           <td>{truncate(course.description)}</td>
    //           <td>{truncate(course.courseCode)}</td>
    //           <td>{truncate(course.studentsCount)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.course({ id: course.id })}
    //                 title={'Show course ' + course.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editCourse({ id: course.id })}
    //                 title={'Edit course ' + course.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete course ' + course.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(course.id)}
    //               >
    //                 Delete
    //               </button>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default CoursesList
