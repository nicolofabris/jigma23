import React, { useEffect, useState } from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'


const ProjectListScreen = () => {
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const [param, setParams] = useState({
        name: "",
        personId: "",
      });

  useEffect(() => {
    fetch("http://localhost:3001/projects?name").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch("http://localhost:3001/users").then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
        <SearchPanel users={users} param={param} setParams={setParams}/>
        <List users={users} list={list}/>
    </div>
  )
}

export default ProjectListScreen