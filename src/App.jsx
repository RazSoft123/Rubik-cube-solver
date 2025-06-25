import CubeContainer from "./components/CubeContainer"
import Heading from "./components/Heading"

function App() {

  return (
    <div className="full-width" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Heading />
      <CubeContainer />
    </div>
  )
}

export default App
