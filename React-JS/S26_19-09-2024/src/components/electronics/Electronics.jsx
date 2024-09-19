import "./Electronics.css";
import { useState, useEffect } from "react";
import Electronic from "./Electronic";
import { electronicsService } from "../../services/electronics/electronicService";
function Electronics() {
  let [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    getElectronicData();
  }, []);

  const getElectronicData = () => {
    electronicsService()
      .then((res) => {
        console.log(res.data);
        setElectronicProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong to get electronics data");
      });
  };

  return (
    <div className="electronicContainer">
      <h2>Electronics Component</h2>
      <div className="electronicBgImages"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae
        quibusdam dolores deserunt et rerum dolor culpa autem, voluptatem animi
        possimus magnam suscipit. Quis omnis molestias velit. Pariatur facilis
        corporis quibusdam alias eligendi architecto cupiditate in a animi
        adipisci accusamus, error nemo aliquid hic placeat iste voluptate atque
        quod earum ex laborum non rerum? Voluptatem excepturi eos dicta, dolorem
        exercitationem eligendi quam a recusandae quo, dolore delectus aliquid
        vero. Accusantium repellat assumenda enim quo, esse odit quidem maxime
        veritatis laudantium ullam eaque tempore expedita omnis aperiam vero
        ipsa amet perferendis doloremque ad nam illo quaerat voluptatibus! Iste
        harum dolorum amet.
      </p>

      {electronicProducts.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly gap-3">
          {electronicProducts.map(function (product) {
            return <Electronic product={product} />;
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          No Electronics Data
        </h2>
      )}
    </div>
  );
}

export default Electronics;
