import React from "react"
import "./workspaceitem.css"
import { Link } from "react-router-dom"

const Workspaceitem = ({img, title, miembros, id}) => {
    return (
        <div className="item">
            <img src={img}/>
            <h2>{title}</h2>
            <span>hay {miembros.length} miembros</span>
            <Link to={"/workspace/" + id}>ir al espacio de trabajo </Link>
        </div>
    )
}

export default Workspaceitem