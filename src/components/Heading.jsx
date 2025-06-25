import "./Heading.css"

export default function Heading() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            <h1>
                Rubik cube solver
            </h1>
            <div className="line"></div>
        </div>
        )
}