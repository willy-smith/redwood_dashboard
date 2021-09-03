import { useState } from 'react'
import { useFilters, useSortBy, useTable } from 'react-table'

export default function Table({ columns, data, filter }) {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  )

  const [filterInput, setFilterInput] = useState('')

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined
    setFilter(filter, value)
    setFilterInput(value)
  }

  return (
    // apply the table props
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-4 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder={`Search by ${filter}`}
        ></input>
      </div>
      <div className="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table
          className="min-w-full divide-y divide-gray-200"
          {...getTableProps()}
        >
          <thead className="bg-gray-50">
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, index) => (
                // Apply the header row props
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, index) => (
                      // Apply the header cell props
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody
            className="bg-white divide-y divide-gray-200"
            {...getTableBodyProps()}
          >
            {
              // Loop over the table rows
              rows.map((row, index) => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <tr key={index} {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td
                            className="px-6 py-4 whitespace-nowrap"
                            key={index}
                            {...cell.getCellProps()}
                          >
                            <div className="flex items-center">
                              {
                                // Render the cell contents
                                cell.render('Cell')
                              }
                            </div>
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
