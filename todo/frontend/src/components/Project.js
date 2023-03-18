import React from "react";
import {Link, useParams} from 'react-router-dom'
const ProjectItem=({project})=>{
    return (
        <tr>
            <td>
                {project.id}
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

        </tr>
    )
}
const ProjectList= ({projects}) =>{
    return(
        <table>
            <thead>
            <tr>
               <th>
                ID
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
            {projects.map((project)=><ProjectItem project={project}/>)}
        </table>
    )
}

export default ProjectList