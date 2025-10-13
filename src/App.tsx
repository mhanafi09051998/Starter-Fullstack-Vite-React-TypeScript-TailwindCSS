function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Vite + React + TypeScript
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Welcome to your new project with Tailwind CSS!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App