import { useState, useEffect } from "react";
import { jobItems } from "../Data/JobItems";

import circleTitle from "../assets/icons/mouse/circleTitle.png";
import bigHouse from "../assets/Images/bigHouseBg.svg";

import squere from "../assets/Images/job/squerePng.png";
import rooms from "../assets/Images/job/roomsPng.png";
import floors from "../assets/Images/job/floorsPng.png";
import bathrooms from "../assets/Images/job/bathroomsPng.png";
/* import decor from "../assets/Images/job/decor.png"; */

import MyBytton from "./UI/MyBytton";

const SectionOurJob = () => {
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
    <section id="sectionHouses" className="sectionJob">
      <div className="containerJob">
        <div className="box-job-image">
          <img src={bigHouse} alt="bigHouse" />
        </div>
        <div id="innerJob" className="innerJob">
          <div
            style={{ width: `${height}px`, left: `-${height / 2 - 20}px` }}
            className="innerJob-Title"
          >
            <div className="line2"></div>
            <img className="circleTitle" src={circleTitle} alt="circleTitle" />
            <h2 className="job-title">наши работы</h2>
            <div className="line1"></div>
          </div>
          <div className="innerJob-subTitle">
            <h3 className="job-subTitle">Построили более 30 домов за 10 лет</h3>
            <div className="title-text-job">
              <p>Дома, которые мы уже построили</p>
            </div>
            <MyBytton />
          </div>
          <div className="jobItems-inner">
            {jobItems.map((item, indx) => (
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

export default SectionOurJob;
