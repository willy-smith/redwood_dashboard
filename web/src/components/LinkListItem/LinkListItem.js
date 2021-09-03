const LinkListItem = ({ children }) => {
  return (
    <li className="cursor-pointer transition duration-300 ease-in-out my-4 py-4 pl-4 rounded-l-md hover:font-bold hover:bg-white hover:text-indigo-700 focus:bg-white focus:text-indigo-700 active:bg-white active:text-indigo-700 hover:font-semibold">
      {children}
    </li>
  )
}

export default LinkListItem
