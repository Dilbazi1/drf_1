import React from "react";
import {Link, useParams} from 'react-router-dom'
const ProjectItem=({project,deleteProject})=>{
    return (
        <tr>
            <td>
                {/*{project.id}*/}
            </td>
            <td>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                {project.users}
            </td>
            <td>

                <button onClick={() => deleteProject(project.id) }>Delete</button>
            </td>

        </tr>
    )
}
const ProjectList= ({projects,deleteProject}) =>{
    return(
        <table>
            <thead>
            <tr>
               <th>
                {/*ID*/}
               </th>
               <th>
                 Name
                </th>
               <th>
                Repository
               </th>
                <th>
                Users
                </th>
             </tr>
            </thead>
            {projects.map((project)=><ProjectItem project={project} deleteProject={deleteProject}/>)}
        </table>
    )
}

export default ProjectList