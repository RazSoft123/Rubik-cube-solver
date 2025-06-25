import "./CubeFace.css"
import { getBackgroundColor } from "../code/Utilities"

export default function CubeFace({ position, faceArr }) {
    return (
        <div className="cube-face">
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[0])}` }} id={`${position+0}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[1])}` }} id={`${position+1}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[2])}` }} id={`${position+2}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[3])}` }} id={`${position+3}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[4])}` }} id={`${position+4}`} className="cell"><span className="center-cell">{position}</span></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[5])}` }} id={`${position+5}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[6])}` }} id={`${position+6}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[7])}` }} id={`${position+7}`} className="cell"></div>
            <div style={{ backgroundColor: `${getBackgroundColor(faceArr[8])}` }} id={`${position+7}`} className="cell"></div>
        </div>
    )
}