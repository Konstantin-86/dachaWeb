import { useState, useEffect } from "react";

import { houseItems } from "../Data/houseItems";

import circleTitle from "../assets/icons/mouse/circleTitle.png";
import HousesBg from "../assets/Images/HousesBg.svg";
import squere from "../assets/Images/job/squerePng.png";
import rooms from "../assets/Images/job/roomsPng.png";
import floors from "../assets/Images/job/floorsPng.png";
import bathrooms from "../assets/Images/job/bathroomsPng.png";

import MyBytton from "./UI/MyBytton";

const SectionHouses = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById("innerJob");
      setHeight(element.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="ourJob" className="housesInner">
      <div className="containerJob">
        <div className="box-job-image">
          <img src={HousesBg} alt="HousesBg" />
        </div>
        <div id="innerJob" className="innerJob">
          <div
            style={{ width: `${height}px`, left: `-${height / 2 - 20}px` }}
            className="innerJob-Title"
          >
            <div className="line2"></div>
            <img className="circleTitle" src={circleTitle} alt="circleTitle" />
            <h2 className="job-title">готовые дома</h2>
            <div className="line1"></div>
          </div>
          <div className="innerJob-subTitle">
            <h3 className="job-subTitle">Строим готовые дома на продажу </h3>
            <div className="title-text-job">
              <p>В чистовой отделке вместе с землёй</p>
            </div>
            <MyBytton />
          </div>
          <div className="jobItems-inner">
            {houseItems.map((item, indx) => (
              <div key={indx} className="jobitem">
                <img src={item.image} alt="jobitem image house" />
                <div className="jobitem-infoBlock">
                  <div className="infoBlock-square">
                    <img
                      className="infoBlock-image"
                      src={squere}
                      alt="squere"
                    />
                    {item.square} кв.м
                  </div>
                  <div className="infoBlock-rooms">
                    <img className="infoBlock-image" src={rooms} alt="rooms" />
                    {item.rooms} комнаты
                  </div>
                  <div className="infoBlock-floors">
                    <img
                      className="infoBlock-image"
                      src={floors}
                      alt="floors"
                    />
                    {item.floors} этажа
                  </div>
                  <div className="infoBlock-bathrooms">
                    <img
                      className="infoBlock-image"
                      src={bathrooms}
                      alt="bathrooms"
                    />
                    {item.bathrooms} санузла
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*  <img className="decorInner" src={decor} alt="decor" /> */}
        </div>
      </div>
    </section>
  );
};

export default SectionHouses;
