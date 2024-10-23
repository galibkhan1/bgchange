import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 bg-slate-500" 
    style ={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white p-2 rounded-xl">
        <div className="flex flex-wrap justify-center gap-4 shadow-md bg-black px-3 py-2 rounded-3xl">
          <button onClick = {()=> setColor("red")}  className="outline-none px-4 rounded-full" style={{backgroundColor:"red"}}>Red</button>
          <button onClick = {()=> setColor("white")}  className="outline-none px-4 rounded-full" style={{backgroundColor:"White"}}>White</button>
          <button onClick = {()=> setColor("black")} className="outline-none px-4 rounded-full text-white " style={{backgroundColor:"black"}}>Black</button>
          <button onClick = {()=> setColor("grey")} className="outline-none px-4 rounded-full" style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick = {()=> setColor("yellow")} className="outline-none px-4 rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick = {()=> setColor("pink")} className="outline-none px-4 rounded-full" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick = {()=> setColor("blue")} className="outline-none px-4 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
