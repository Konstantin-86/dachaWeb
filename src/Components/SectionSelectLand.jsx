import land from "../assets/Images/land.png";

const SectionSelectLand = () => {
  return (
    <section id="land" className="sectionSelectLand">
      <div className="container">
        <h3 className="land__title">Подберите участок для вашего дома</h3>
        <p className="land__subtitle">
          Предлагаем участки под строительство в разных посёлках
        </p>
        <button className="land__button">Записаться на экскурсию</button>
        <h4 className="land__nameLand">Эстачи</h4>
        <img className="land__image" src={land} alt="land" />
      </div>
    </section>
  );
};

export default SectionSelectLand;
