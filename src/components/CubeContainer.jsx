import './CubeContainer.css'
import CubeFace from './CubeFace'

export default function CubeContainer() {
    return (
        <div className="container">
            <div className='face-container'>
                <CubeFace position="U" />
            </div>
            <div className='face-container'>
                <CubeFace position="F" />
                <CubeFace position="L" />
                <CubeFace position="B" />
                <CubeFace position="R" />
            </div>
            <div className='face-container'>
                <CubeFace position="D" />
            </div>
        </div>
    )
}