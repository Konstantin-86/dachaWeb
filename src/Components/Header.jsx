import { useEffect } from "react";
import logo from "../assets/Images/logo.svg";
import { useState } from "react";

import mouse from "../assets/icons/mouse/mouse.png";
import mouseArrow from "../assets/icons/mouse/mouse-arrow.png";

const Header = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [handleBurger, setHandleBurger] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight - 67) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const hideMenu = () => {
    setHandleBurger(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <img className="header-top-logo" src={logo} alt="logo" />
          <div className="innerPhone">
            <a href="tel:+78432480707">
              + 7 (843) 248 07 07<span>перезвоните мне</span>
            </a>
          </div>
        </div>
        <div className="innerTitle">
          <h1 className="title">EL DACHA</h1>
          <span>строительство загородных домов</span>
        </div>
      </div>
      <div
        className={
          stickyNav ? "header-bottom header-bottom--fixed" : "header-bottom"
        }
      >
        <nav className="main-nav">
          <div className="innerPhone-burger">
            <a href="tel:78432480707">+ 7 (843) 248 07 07</a>
          </div>
          <div
            onClick={() => setHandleBurger(!handleBurger)}
            className={handleBurger ? "burger-open" : "burger-close"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={
              handleBurger ? "header-bottom-list--active" : "header-bottom-list"
            }
          >
            <li className="bottom-list-item">
              <a
                onClick={hideMenu}
                className="bottom-list-link"
                href="#sectionHouses"
              >
                Наши работы
              </a>
            </li>
            <li className="bottom-list-item">
              <a onClick={hideMenu} className="bottom-list-link" href="#ourJob">
                Готовые дома
              </a>
            </li>
            <li className="bottom-list-item">
              <a onClick={hideMenu} className="bottom-list-link" href="#calc">
                Калькулятор
              </a>
            </li>
            <li className="bottom-list-item">
              <a onClick={hideMenu} className="bottom-list-link" href="#land">
                Подобрать участок
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="inner-mouse">
        <img src={mouse} alt="mouse" />
        <img src={mouseArrow} alt="mouseArrow" />
      </div>
    </header>
  );
};

export default Header;
