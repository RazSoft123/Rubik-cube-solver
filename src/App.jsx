import { useReducer } from "react"
import CubeContainer from "./components/CubeContainer"
import Heading from "./components/Heading"
import Options from "./components/Options";
import RubikCube from './code/RubicCube';

function reducer(state, action) {
  switch(action.type){
    
    case 'up-clock':
      state.upClock();
      return {...state}
    
    case 'down-clock': 
      state.downClock();
      return {...state}

    case 'front-clock':
      state.frontClock();
      return {...state}

    case 'back-clock':
      state.backClock();
      return {...state};
    
    case 'right-clock' :
      state.rightClock();
      return {...state};
    
    case 'left-clock':
      state.leftClock();
      return {...state};

    case 'up-anti-clock':
      state.upAntiClock();
      return {...state};

    case 'down-anti-clock':
      state.downAntiClock();
      return {...state}
    
    case 'front-anti-clock':
      state.frontAntiClock();
      return {...state}
    
    case 'back-anti-clock' :
      state.backAntiClok();
      return {...state}

    case 'right-anti-clock' :
      state.rightAntiClock();
      return {...state}
    
    case 'left-anti-clock' :
      state.leftAntiClock();
      return {...state};
    
    case 'set-cube': 
      return {...action.payload}
  
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, new RubikCube())
  return (
    <div className="full-width" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Heading />
      <Options dispatch={dispatch} state={state}/>
      <CubeContainer state={state} />
    </div>
  )
}

export default App
