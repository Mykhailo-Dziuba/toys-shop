import "./Drawer.scss";

export function Drawer({ drawerClose, cardsDrawer }) {
  return (
    <>
      <div className="overlay">
        <div className="drawer">
          <button onClick={drawerClose}>x</button>
          <h2>Кошик</h2>
          <div className="drawer-card">
            {cardsDrawer.map((card) => (
              <div className="main-card">
                <img width={100} height={100} src={card.img} alt="" />
                <p>{card.title}</p>
                <span>Ціна:</span>
                <span>{card.price} грн</span>
              </div>
            ))}
            <div className="drawer-info">
              <button className="drawer-button">Замовити</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
