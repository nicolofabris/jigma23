import React from 'react'

const List = ({list, users}) => {
  return (
    <div align={"center"}>
        <table style={{border: "1.5px solid rgb(200, 200, 200"}}>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Assignee</th>
                </tr>
            </thead>
            <tbody>
                {list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name || 'Unknown'}</td>
                </tr>) }
            </tbody>
        </table>
    </div>
  )
}

export default List