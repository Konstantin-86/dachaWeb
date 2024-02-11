import { useState, useEffect } from "react";

import calcBg from "../assets/Images/calcBg.svg";
import circleTitle from "../assets/icons/mouse/circleTitle.png";
import CalcLogics from "./CalcLogics";
const SectionCalculator = () => {
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
    <section className="sectionCalc">
      <div className="containerJob">
        <div className="box-job-image calc-bg-image">
          <img src={calcBg} alt="calcBg" />
        </div>
        <div id="innerJob" style={{ minHeight: "100vh" }} className="innerJob">
          <div
            style={{ width: `${height}px`, left: `-${height / 2 - 20}px` }}
            className="innerJob-Title"
          >
            <div className="line2 cacl-line"></div>
            <img className="circleTitle" src={circleTitle} alt="circleTitle" />
            <h2 className="job-title calc-title">калькулятор</h2>
            <div className="line1 cacl-line"></div>
          </div>
          <div className="innerJob-subTitle ">
            <h3 className="job-subTitle calc-subtitle ">
              Построим дом по вашим предпочтениям
            </h3>
            <div className="title-text-job calc-subtitle">
              <p>Каким будет ваш дом?</p>
            </div>
          </div>

          {/*  <img className="decorInner" src={decor} alt="decor" /> */}
          <CalcLogics />
        </div>
      </div>
    </section>
  );
};

export default SectionCalculator;
