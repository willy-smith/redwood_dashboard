import { useMutation } from '@redwoodjs/web'
import { format, parseISO } from 'date-fns'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import { QUERY } from 'src/components/Student/StudentsCell'
import { useEffect, useMemo, useState } from 'react'
import Table from 'src/components/Table/Table'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const StudentsList = ({ students }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(students)
  }, [students])

  console.log(data)

  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.student({ id: original.id })}>{value}</Link>
        ),
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.student({ id: original.id })}>{value}</Link>
        ),
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ cell: { value }, row: { original } }) => (
          <Link to={routes.student({ id: original.id })}>{value}</Link>
        ),
      },
      {
        Header: 'Enrolled Since',
        accessor: `createdAt`,
        Cell: ({ cell: { value } }) => format(parseISO(value), 'MMM dd yyyy'),
      },
    ],
    []
  )

  return (
    <div>
      <Table columns={columns} data={data} filter={'email'} />
    </div>
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>First name</th>
    //         <th>Last name</th>
    //         <th>Email</th>
    //         <th>Enrolled Since</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {students.map((student) => (
    //         <tr key={student.id}>
    //           <td>{truncate(student.id)}</td>
    //           <td>{truncate(student.firstName)}</td>
    //           <td>{truncate(student.lastName)}</td>
    //           <td>{truncate(student.email)}</td>
    //           <td>
    //             {truncate(format(parseISO(student.createdAt), 'yyyy MMM dd'))}
    //           </td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.student({ id: student.id })}
    //                 title={'Show student ' + student.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editStudent({ id: student.id })}
    //                 title={'Edit student ' + student.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete student ' + student.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(student.id)}
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

export default StudentsList
