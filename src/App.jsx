import { useReducer } from "react"
import CubeContainer from "./components/CubeContainer"
import Heading from "./components/Heading"
import Options from "./components/Options";
import RubikCube from './code/RubicCube';
import { cloneDeepObject } from "./code/Utilities";

function reducer(state, action) {
  console.log("state", state);

  switch(action.type){
    
    case 'up-clock':
      state.upClock();
      // return {...state}
      return cloneDeepObject(state);
    
    case 'down-clock': 
      state.downClock();
      // return {...state}
      return cloneDeepObject(state);

    case 'front-clock':
      state.frontClock();
      // return {...state}
      return cloneDeepObject(state);

    case 'back-clock':
      state.backClock();
      // return {...state};
      return cloneDeepObject(state);
    
    case 'right-clock' :
      state.rightClock();
      // return {...state};
      return cloneDeepObject(state);
    
    case 'left-clock':
      state.leftClock();
      // return {...state};
      return cloneDeepObject(state);

    case 'up-anti-clock':
      state.upAntiClock();
      // return {...state};
      return cloneDeepObject(state);

    case 'down-anti-clock':
      state.downAntiClock();
      // return {...state}
      return cloneDeepObject(state);
    
    case 'front-anti-clock':
      state.frontAntiClock();
      // return {...state}
      return cloneDeepObject(state);
    
    case 'back-anti-clock' :
      state.backAntiClok();
      // return {...state}
      return cloneDeepObject(state);

    case 'right-anti-clock' :
      state.rightAntiClock();
      // return {...state}
      return cloneDeepObject(state);
    
    case 'left-anti-clock' :
      state.leftAntiClock();
      // return {...state};
      return cloneDeepObject(state);
    
    case 'set-cube': 
      // return {...state, ...action.payload}
      return cloneDeepObject(action.payload);
  
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
