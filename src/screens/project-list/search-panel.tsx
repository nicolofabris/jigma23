import React, { useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
}


interface SearchPanelProps {
  users: User[],
  param: { 
    name: string,
    personId: string,
  },
  setParams: (param: SearchPanelProps['param']) => void
}

const SearchPanel = ({users, param, setParams}: SearchPanelProps) => {

  return (
    <form action={""}>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) => setParams({ ...param, name: e.target.value })}
        />
        <select value={param.personId} onChange={(e) => setParams({...param, personId: e.target.value})}>
            <option value={''}>Assignee</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
