import { Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
      <div>
        <h1>

          GitHub Finder
        </h1>

        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App