import React from "react"
import "./workspacelist.css"
import Workspaceitem from "../Workspaceitem/workspaceitem"


const WorkspaceList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map (
        ( workspaces )=>{
            return <Workspaceitem title={workspaces.title} 
            id={workspaces.id} 
            miembros={workspaces.miembros} 
            img={workspaces.img}
            key={workspaces.id}
            />
        }
    )
    return (
        <div>
            <h1>Tus espacios de trabajos</h1>
            <div>
                {workspacesListJSX}
            </div>
        </div>
    )
}

export default WorkspaceList