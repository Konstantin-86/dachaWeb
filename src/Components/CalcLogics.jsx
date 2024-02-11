import { useEffect, useState } from "react";

import calcQuestion from "../assets/icons/calcQuestion.png";

const CalcLogics = () => {
  const [floos, setFloos] = useState("1");
  const [renovationStage, setRenovationStage] = useState("1");
  const [roughFinishInfo, setRoughFinishInfo] = useState(false);
  const [preFinishingInfo, setPreFinishingInfo] = useState(false);
  const [fineFinishingInfo, setFineFinishingInfo] = useState(false);
  const [rangeValue, setRangeValue] = useState(240);
  const [fullprice, setFullprice] = useState(6500000);

  useEffect(() => {
    let floosRes = 1;
    if (floos === "2") floosRes = 1.1;
    if (floos === "3") floosRes = 1.2;

    let stageRes = 1;
    if (renovationStage === "2") stageRes = 1.2;
    if (renovationStage === "3") stageRes = 2;

    let rangeRes = 27083.33 * floosRes * stageRes;

    setFullprice(Math.ceil(rangeRes * rangeValue));
  }, [floos, renovationStage, rangeValue]);
  return (
    <div id="calc" className="innerCalcLogics">
      <ol className="logic-inner-items-list">
        <li className="logicItem">
          <div className="item-number">01</div>
          <h4 className="logic-item-title">Количество этажей</h4>
          <div className="box-item-decor">
            <input
              type="radio"
              id="1"
              name="floos"
              value="1"
              checked={floos === "1"}
              onChange={(e) => setFloos(e.target.value)}
            />
            <label htmlFor="1">1</label>
            <input
              type="radio"
              id="2"
              name="floos"
              value="2"
              checked={floos === "2"}
              onChange={(e) => setFloos(e.target.value)}
            />
            <label htmlFor="2">2</label>
            <input
              type="radio"
              id="3"
              name="floos"
              value="3"
              checked={floos === "3"}
              onChange={(e) => setFloos(e.target.value)}
            />
            <label htmlFor="3">3</label>
          </div>
        </li>
        <li className="logicItem">
          <div className="item-number">02</div>
          <h4 className="logic-item-title">Стадия ремонта</h4>
          <div className="box-item-radioBtn">
            <input
              type="radio"
              id="rough finish"
              name="finishing"
              value="1"
              checked={renovationStage === "1"}
              onChange={(e) => setRenovationStage(e.target.value)}
            />
            <label htmlFor="rough finish">
              Черновая
              <img
                onMouseEnter={() => setRoughFinishInfo(true)}
                onMouseLeave={() => setRoughFinishInfo(false)}
                className="rough-finish-image"
                src={calcQuestion}
                alt="calcQuestion"
              />
              {roughFinishInfo && (
                <div className="rough-finish-info">
                  <p>
                    <span>Черновая. </span>
                    Минимальная отделка, предподготовка для дальнейшего ремонта.
                    Черновая отделка — простор для творчества. Это подготовка
                    поверхностей для дальнейшего ремонта, который покупатель
                    делает по своему усмотрению.
                  </p>
                </div>
              )}
            </label>

            <input
              type="radio"
              id="Pre-finishing"
              name="finishing"
              value="2"
              checked={renovationStage === "2"}
              onChange={(e) => setRenovationStage(e.target.value)}
            />
            <label htmlFor="Pre-finishing">
              Предчистовая
              <img
                onMouseEnter={() => setPreFinishingInfo(true)}
                onMouseLeave={() => setPreFinishingInfo(false)}
                className="Pre-Finishing-Image"
                src={calcQuestion}
                alt="calcQuestion"
              />
              {preFinishingInfo && (
                <div className="Pre-Finishing-info">
                  <p>
                    <span>Предчистовая. </span>
                    Промежуточный этап ремонта. Самые шумные и грязные работы
                    сделаны, можно сконцентрироваться на дизайне и наполнении.
                  </p>
                </div>
              )}
            </label>

            <input
              type="radio"
              id="fine finishing"
              name="finishing"
              value="3"
              checked={renovationStage === "3"}
              onChange={(e) => setRenovationStage(e.target.value)}
            />
            <label htmlFor="fine finishing">
              Чистовая
              <img
                className="fine-finishing-image"
                src={calcQuestion}
                alt="calcQuestion"
                onMouseEnter={() => setFineFinishingInfo(true)}
                onMouseLeave={() => setFineFinishingInfo(false)}
              />
              {fineFinishingInfo && (
                <div className="fine-finishing-info">
                  <p>
                    <span>Чистовая. </span>
                    Формат «заезжай и живи». Квартира полностью готова, включая
                    установленную сантехнику, покрытие пола и обои. Можно
                    постепенно переделывать их под себя, если по каким-то
                    причинам не устраивает отделка от застройщика.
                  </p>
                </div>
              )}
            </label>
          </div>
        </li>
        <li className="logicItem">
          <div className="item-number">03</div>
          <h4 className="logic-item-title">Площадь дома</h4>
          <div className="logic-item-range-box">
            <div className="item-range-line-decor"></div>
            <div className="item-range-min">80</div>
            <div className="item-range-max">400</div>
            <input
              type="range"
              min="80"
              max="400"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              step="10"
            />
          </div>
          <div className="logic-house-area">
            <p>{rangeValue} </p>
            <p>кв.м</p>
          </div>
        </li>
      </ol>
      <div className="logic-line-decor"></div>
      <div className="logic-inner-paynemt">
        <p className="advance-paynemt">Предварительный расчёт</p>
        <p className="paynemt-fullprice">
          {fullprice.toLocaleString("ru-RU")} р
        </p>
        <a href="tel:+78432480707">Свяжитесь со мной</a>
      </div>
      <div className="logic-footer">
        Более точный расчёт вы сможете сделать с помошью менеджера
      </div>
    </div>
  );
};

export default CalcLogics;
