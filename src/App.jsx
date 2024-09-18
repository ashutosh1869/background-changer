import { useState } from 'react'


function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="w-full h-screen flex flex-wrap justify-center text-white 
    " style={{backgroundColor: color}}>
      <div className="fixed bottom-4 flex gap-4 justify-center bg-white px-2 py-1 rounded-lg
       ">
        <button className="bg-red-950 px-2 py-1  outline-none rounded-lg" onClick={()=> setColor("red")}>RED</button>
        <button className="bg-blue-950 px-2 py-1  outline-none rounded-lg" onClick={()=> setColor("blue")}>BLUE</button>

        <button className="bg-green-950 px-2 py-1  outline-none rounded-lg" onClick={()=> setColor("green")}>GREEN</button>
        <button className="bg-yellow-300 px-2 py-1  outline-none rounded-lg" onClick={()=> setColor("yellow")}>YELLOW</button>

      </div>
    </div>
  )
}

export default App
