import React from "react";

function TableComp({ users, setUsers }) {
  const deleteUser = (index) => {
    users.splice(index, 1);

    setUsers([...users]);
  };
  return (
    <div>
      <table width="100%" cellPadding="10px">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComp;
