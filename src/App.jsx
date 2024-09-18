import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#ffa5ab")

  return (
    <div className="w-full h-screen flex flex-wrap justify-center text-white 
    " style={{backgroundColor: color}}>
      <div className="fixed bottom-4 flex gap-4 justify-center bg-white px-2 py-1 rounded-lg
       ">
        <button className="bg-pink-300 px-2 py-1  outline-none rounded-full" onClick={()=> setColor("#ffa5ab")}>PINK</button>
        <button className="bg-gray-500 px-2 py-1  outline-none rounded-full" onClick={()=> setColor("#c0c0c0")}>GREY</button>

        <button className="bg-green-300 px-2 py-1  outline-none rounded-full" onClick={()=> setColor("#52b788")}>GREEN</button>
        <button className="bg-yellow-300 px-2 py-1  outline-none rounded-full" onClick={()=> setColor("#f4d58d")}>YELLOW</button>
       

      </div>
    </div>
  )
}

export default App
