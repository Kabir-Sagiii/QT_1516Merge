import "./Profile.css";
import { useState } from "react";
function Profile() {
  let Name = useState("Rohan Sharma"); //Name = [variable,setterFunction]

  let [gender, setGender] = useState("male");

  let [image, setImage] = useState(
    "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
  );
  let [email, setEmail] = useState("rohan@gmail.com");
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    message: "Check to switch DarkMode",
  });

  const updateDataToFemale = () => {
    Name[1]("Zoya Khan");
    setGender("female");

    setImage(
      "https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?rs=1&pid=ImgDetMain"
    );
    setEmail("zoya@gmail.com");
  };

  const updateDataToMale = () => {
    Name[1]("Rohan Sharma");
    setGender("male");
    setImage(
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
    );
    setEmail("rohan@gmail.com");
  };

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
        message: "Uncheck to switch Lightmode",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        message: "Check to switch Darkmode",
      });
    }
  };

  return (
    <div className="profileContainer">
      <div className="left">
        <img src={image} width={"100%"} height={"100%"} />
      </div>
      <div
        className="right"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>NAME</b>
          </dt>
          <dd>{Name[0]}</dd>

          <dt>
            <b>GENDER</b>
          </dt>
          <dd>{gender}</dd>

          <dt>
            <b>EMAIL ID</b>
          </dt>
          <dd>{email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            magni! Blanditiis asperiores amet voluptates aperiam dignissimos
            rerum distinctio necessitatibus autem soluta esse sed, aliquid minus
            illo, dolor veritatis dicta ratione? magni! Blanditiis asperiores
            amet voluptates aperiam dignissimos rerum distinctio necessitatibus
            autem soluta esse sed, aliquid minus illo, dolor veritatis dicta
            ratione?
          </dd>
        </dl>
        <div className="genderContainer">
          <div>
            <input
              defaultChecked
              type="radio"
              name="gender"
              onChange={updateDataToMale}
            />
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" onClick={updateDataToFemale} />
            <label>Female</label>
          </div>
        </div>
        <br />
        <div>
          <input type="checkbox" onChange={changeTheme} />
          <label>{theme.message}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
