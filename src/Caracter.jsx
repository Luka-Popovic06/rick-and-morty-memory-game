import React from "react";
const Caracter = (props) => {
  const {
    id,
    img,
    firstName,
    lastName,
    clicked,
    setScore,
    selectCard,
    isClicked,
  } = props;
  return (
    <li
      className="list-item"
      onClick={() => {
        !isClicked && setScore();
        clicked(id);
        selectCard(id);
      }}
    >
      <img className="caracter-img" src={img} alt={`${firstName}-img`} />
      <p className="name">
        {firstName} {lastName}
      </p>
    </li>
  );
};
export default Caracter;
