import { useState } from "react";
import "./Card.scss";

export function Card({ img, title, price, addCard }) {
  const [plus, setPlus] = useState(false);

  const clickPlus = () => {
    addCard({ img, title, price });
    setPlus(!plus);
  };

  return (
    <>
      <div className="main-card">
        <img width={200} height={200} src={img} alt="" />
        <p>{title}</p>
        <span>Ціна:</span>
        <span>{price} грн</span>
        <button className={plus ? "main-btn" : null} onClick={clickPlus}>
          +
        </button>
      </div>
    </>
  );
}
