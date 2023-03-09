import {Link, useParams} from "react-router-dom";
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

const ProjectDetailList=({projects})=>{
    let {id}=useParams()
     console.log()
    let filter_item=projects.filter((project=>project.id===parseInt(id)))

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
            {filter_item.map((project)=><ProjectItem project={project}/>)}
        </table>
    )

}
export default ProjectDetailList