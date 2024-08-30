import React from "react";

function TableComp({ usersList, setUsersList }) {
  function deleteUser(index) {
    usersList.splice(index, 1);

    setUsersList([...usersList]);
  }

  return (
    <div style={{ border: "3px solid red", padding: "20px" }}>
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
          {usersList.map(function (element, index) {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.password}</td>
                <td>{element.email}</td>
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
