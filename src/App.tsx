import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-purple-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-95 h-95 ">
          <h1>hello world!</h1>

          <button className="bg-red-500 font-bold text-xl hover:animate-spin px-2 py-4">
            Aperta!
          </button>
      </div>
    </div>
  );
  
  
}

export default App
