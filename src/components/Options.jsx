import './Options.css'
import { scrambleCube } from './../code/Utilities'

function scramble(dispatch, cube) {
    console.log("Cube getting scrambled");
    const turns = parseInt(document.getElementById('turns').value)
    let newCube = {...scrambleCube(turns, cube)}
    dispatch({type: "set-cube", payload: newCube})
}

export default function Options({ dispatch, state }) {
    return (
        <div className="option-container">
            <div className='element-container'>
                <label className='element' htmlFor="turns">No of truns:</label>
                <input className='element' style={{ maxWidth: "50px" }} type="number" name="" id="turns" defaultValue={5}/>
                <button onClick={() => scramble(dispatch, state)} className='button element'>Scramble</button>
            </div>

            <div className='element-container'>
                <select className='element' name="" id="">
                    <option value="up-clock">Up face clockwise</option>
                    <option value="down-clock">Down face clockwise</option>
                    <option value="front-clock">Front face clockwise</option>
                    <option value="back-clock">Back face clockwise</option>
                    <option value="right-clock">Right face clockwise</option>
                    <option value="left-clock">Left face clockwise</option>
                    <option value="up-anti-clock">Up face anti clockwise</option>
                    <option value="down-anti-clock">down face anti clockwise</option>
                    <option value="front-anti-clock">front face anti clockwise</option>
                    <option value="back-anti-clock">Back face clockwise</option>
                    <option value="right-anti-clock">Right face anti clockwise</option>
                    <option value="left-anti-clock">left face anti clockwise</option>
                </select>

                <button className='button element'>Turn</button>
            </div>

        </div>
    )
}