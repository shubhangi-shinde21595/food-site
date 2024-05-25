import React from "react";
import Group1 from "../images/Group1.png";
import Meal from "../images/Meal.png";
import salad from "../images/salad.jpg";
import salad3 from "../images/salad3.png";

export default function Menu() {
  return (
    <div className="main-content">
      <div className="left">
        <h1 className="heading">Eat together</h1>
        <h1 className="heading">Live another day</h1>
        <p>
          Food is any substance consumed by an organism for nutritional support.
          Food is usually of plant, animal, or fungal origin and contains
          essential nutrients such as carbohydrates, fats, proteins, vitamins,
          or minerals. The substance is ingested by an organism and assimilated
          by the organism's cells to provide energy, maintain life, or stimulate
          growth.
        </p>
        <div className="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="PUNE, MAHARASTRA, INDIA"
          />
          <i className="ri-crosshair-2-fill"></i>
        </div>
        <button>SEARCH</button>
      </div>

      <div className="right">
        <img src={Group1} alt="" loading="lazy" id="background" />
        <div id="all-plate">
          <img id="img1" src={salad} alt="" loading="lazy" />
          <img id="img2" src={Meal} alt="" loading="lazy" />
          <img id="img3" src={salad3} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
