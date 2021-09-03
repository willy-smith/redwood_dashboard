const Button = ({ children }) => {
  return (
    <button className="transition duration-300 ease-in-out px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md mr-8 my-4 hover:bg-indigo-600 hover:translate-y-px">
      {children}
    </button>
  )
}

export default Button
