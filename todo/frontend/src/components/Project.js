import React from "react";
const ProjectItem=({project})=>{
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.name}
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