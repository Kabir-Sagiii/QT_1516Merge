import { useState } from "react";

// function Map() {
//   var data = [1, 2, 3, 4, 5, 6, 7, 8];
//   //   var data = [<li>1</li>, <li>2</li>, <li>3</li>];
//   var city = "Delhi";
//   return (
//     <div>
//       <ul>
//         {data.map(function (element, index) {
//           return <li>{element}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
function Map() {
  const [data, setData] = useState([
    {
      name: "s1",
      city: "c1",
    },
    {
      name: "s2",
      city: "c2",
    },
    {
      name: "s3",
      city: "c3",
    },
  ]); //data = [{},{},{}]

  return (
    <div>
      <table frame="box" rules="all">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Map;
