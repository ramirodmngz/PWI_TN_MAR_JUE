import React from "react";
import { WorkspaceList } from "../components";
import { Link } from "react-router-dom";
import workspaces from "../data/workspacesData";



const HomeScreen = () => {
    
    return (
        <div>
            <Link to={"/estados"}>Ir a estados</Link>
            <br />
            <Link to={"/formularios"}>Ir a formularios</Link>
            <WorkspaceList workspaces={workspaces}/>
            
        </div>
    )
}

export default  HomeScreen