

export default function Navbar() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between bg-red-800 p-3">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-white">
        Rolls Royce
        </h2>
       
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">     
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold
             text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 
             focus-visible:outline-offset-2 focus-visible:outline-red-800">
            LogIn
          </button>
        </span>
       
      </div>

      <div className="mt-5 flex lg:ml-4 lg:mt-0">     
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold
             text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 
             focus-visible:outline-offset-2 focus-visible:outline-red-800">
            SignIn
          </button>
        </span>
       
      </div>
    </div>
  )
}
