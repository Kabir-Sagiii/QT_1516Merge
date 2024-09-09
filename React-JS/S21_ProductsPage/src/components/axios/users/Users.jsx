import { useState } from "react";
import { getUsers } from "../service/UsersService";
import User from "../user/User";

import "./Users.css";
function Users() {
  let [users, setUsers] = useState([]);

  const sendRequest = () => {
    var usersPromiseObject = getUsers();
    usersPromiseObject
      .then((users) => {
        console.log(users.data.results);
        setUsers(users.data.results);
      })
      .catch((error) => {
        alert("Failed to get Users Data");
      });
  };

  return (
    <div className="usersContainer">
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id esse
        praesentium. Repudiandae impedit qui, facere blanditiis, sint tenetur
        quidem ab illo nam esse et! Natus, et temporibus nisi, recusandae
        expedita ipsam accusamus officiis doloribus aut assumenda voluptatibus
        fuga minima voluptas alias quod similique molestias ut repellat
        consectetur provident sed enim, molestiae ducimus! Voluptate, ipsum ipsa
        ipsam quam, recusandae assumenda amet adipisci eveniet, tenetur ullam
        saepe labore inventore debitis doloremque sapiente ducimus vel quo
        provident hic dolorum sint culpa neque architecto laudantium! Animi fuga
        commodi aspernatur magni similique eligendi quos molestias laborum
        exercitationem! Explicabo nihil laboriosam ratione velit natus minus
        alias qui voluptates ullam, numquam omnis! Aliquid earum perferendis sed
        natus commodi in esse cumque ut numquam quia, adipisci soluta asperiores
        vel temporibus iste porro cupiditate aspernatur inventore nulla hic
        saepe provident eius! Dolorem iste at, nesciunt corrupti, eos minus vel,
        voluptas similique ipsa tempora officiis repellendus aperiam repudiandae
        nemo.
      </p>
      <button onClick={sendRequest}>Get Users</button>

      <div>
        <div>
          <input type="radio" />
          <label>ALL</label>
        </div>
        <div>
          <input type="radio" />
          <label>Male</label>
        </div>
        <div>
          <input type="radio" />
          <label>Female</label>
        </div>
      </div>

      <div className="userContainer">
        {users.map((element, index) => {
          return <User user={element} />;
        })}
      </div>
    </div>
  );
}

export default Users;
