import "./CubeFace.css"

export default function CubeFace({ position }) {
    return (
        <div className="cube-face">
            <div id={`${position+0}`} className="cell"></div>
            <div id={`${position+1}`} className="cell"></div>
            <div id={`${position+2}`} className="cell"></div>
            <div id={`${position+3}`} className="cell"></div>
            <div id={`${position+4}`} className="cell"><span className="center-cell">{position}</span></div>
            <div id={`${position+5}`} className="cell"></div>
            <div id={`${position+6}`} className="cell"></div>
            <div id={`${position+7}`} className="cell"></div>
            <div id={`${position+7}`} className="cell"></div>
        </div>
    )
}