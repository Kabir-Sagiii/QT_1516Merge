// import { useState } from "react";
// function ImageC() {
//   let [image, setImage] = useState(
//     "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgAAAA?rs=1&pid=ImgDetMain"
//   );

//   const changeToNode = () => {
//     setImage(
//       "https://s3-eu-west-1.amazonaws.com/blog.forestadmin.com/2021/09/FA-article-nodeJS@2x-1-.png"
//     );
//   };

//   const changeToReact = () => {
//     setImage(
//       "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgAAAA?rs=1&pid=ImgDetMain"
//     );
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>React JS</h2>
//       <br />
//       <img src={image} width={500} height={300} />
//       <br />
//       <br />
//       <button onClick={changeToReact}>React JS</button>
//       <button onClick={changeToNode}>Node JS</button>
//     </div>
//   );
// }
import { useState } from "react";
import "./ImageC.css";
function ImageC() {
  let [text, setText] = useState("React title");

  function changeToNode() {
    setText("Node JS Title");
  }

  const changeToReact = () => {
    setText("React JS Title");
  };

  return (
    <div className="ImageContainer">
      <h2>{text}</h2>
      <br />
      <button onClick={changeToReact}>React JS</button>
      <button onClick={changeToNode}>Node JS</button>
    </div>
  );
}

export default ImageC;
