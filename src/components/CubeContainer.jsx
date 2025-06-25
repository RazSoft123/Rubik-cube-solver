import './CubeContainer.css'
import CubeFace from './CubeFace'

export default function CubeContainer({ state }) {
    return (
        <div className="container">
            <div className='face-container'>
                <CubeFace faceArr={state.upFace} position="U" />
            </div>
            <div className='face-container'>
                <CubeFace faceArr={state.frontFace} position="F" />
                <CubeFace faceArr={state.leftFace} position="L" />
                <CubeFace faceArr={state.backFace} position="B" />
                <CubeFace faceArr={state.rightFace} position="R" />
            </div>
            <div className='face-container'>
                <CubeFace faceArr={state.downFace} position="D" />
            </div>
        </div>
    )
}