import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";


const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
         <th>Image</th>
          <th>Name</th>
          <th>status</th>
          <th>Role</th>
          <th>Email</th>
          <th colspan="3">Teams</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td><img src={row.image} alt={''} width="50" height="50"/></td>
            <td>{row.fName} {row.lName}</td>
            <td>
            <span className={`status-badge ${row.isActive ? 'active' : 'inactive'}`}>
                  {row.isActive ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td>{row.role}</td>
            <td>{row.email}</td>
            <td>
                <div className="teams">
                  {row.teams.map((team, index) => (
                    <span key={index} className="team-badge">
                      {team}
                    </span>
                  ))}
                </div>
            </td>
            <td><RiDeleteBinLine /></td>
            <td><FiEdit2 /></td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
