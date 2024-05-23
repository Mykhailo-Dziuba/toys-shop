import { useState } from "react";
import "./App.scss";
import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

function App() {
  const [drawer, setDrawer] = useState(false);
  const [arrCards, setArrCards] = useState([
    {
      img: "/img/1.png",
      title: "Пожежна машина",
      price: 900,
    },
    { img: "/img/2.png", title: "Робот Марк", price: 700 },
    {
      img: "/img/3.png",
      title: "Дитячий скейтборд",
      price: 500,
    },
    {
      img: "/img/4.png",
      title: "Велосипед Turbotrike",
      price: 440,
    },
    {
      img: "/img/5.png",
      title: "Самокат Micro Sprite",
      price: 770,
    },
    {
      img: "/img/6.png",
      title: "Роликові ковзани",
      price: 440,
    },
    {
      img: "/img/7.png",
      title: "Роликові ковзани",
      price: 440,
    },
    { img: "/img/8.png", title: "М'яка іграшка", price: 440 },
    {
      img: "/img/9.png",
      title: "М'яка іграшка",
      price: 440,
    },
    {
      img: "/img/10.png",
      title: "Подушка Огірок",
      price: 440,
    },
    {
      img: "/img/11.png",
      title: "Подушка пес Патрон",
      price: 440,
    },
    {
      img: "/img/12.png",
      title: "Ігровий набір",
      price: 440,
    },
    {
      img: "/img/13.png",
      title: "Ігровий набір",
      price: 440,
    },
    { img: "/img/14.png", title: "Пазли Знайди емоції", price: 440 },
    {
      img: "/img/15.png",
      title: "Пазли Казкові сни",
      price: 440,
    },
    {
      img: "/img/16.png",
      title: "Пазли Біла кішка у вінку",
      price: 440,
    },
    {
      img: "/img/1.png",
      title: "Пожежна машина",
      price: 900,
    },
    { img: "/img/2.png", title: "Робот Марк", price: 700 },
    {
      img: "/img/3.png",
      title: "Дитячий скейтборд",
      price: 500,
    },
    {
      img: "/img/4.png",
      title: "Велосипед Turbotrike",
      price: 440,
    },
    {
      img: "/img/5.png",
      title: "Самокат Micro Sprite",
      price: 770,
    },
    {
      img: "/img/6.png",
      title: "Роликові ковзани",
      price: 440,
    },
    {
      img: "/img/7.png",
      title: "Роликові ковзани",
      price: 440,
    },
    { img: "/img/8.png", title: "М'яка іграшка", price: 440 },
    {
      img: "/img/9.png",
      title: "М'яка іграшка",
      price: 440,
    },
    {
      img: "/img/10.png",
      title: "Подушка Огірок",
      price: 440,
    },
    {
      img: "/img/11.png",
      title: "Подушка пес Патрон",
      price: 440,
    },
    {
      img: "/img/12.png",
      title: "Ігровий набір",
      price: 440,
    },
    {
      img: "/img/13.png",
      title: "Ігровий набір",
      price: 440,
    },
    { img: "/img/14.png", title: "Пазли Знайди емоції", price: 440 },
    {
      img: "/img/15.png",
      title: "Пазли Казкові сни",
      price: 440,
    },
    {
      img: "/img/16.png",
      title: "Пазли Біла кішка у вінку",
      price: 440,
    },
    {
      img: "/img/1.png",
      title: "Пожежна машина",
      price: 900,
    },
    { img: "/img/2.png", title: "Робот Марк", price: 700 },
    {
      img: "/img/3.png",
      title: "Дитячий скейтборд",
      price: 500,
    },
    {
      img: "/img/4.png",
      title: "Велосипед Turbotrike",
      price: 440,
    },
    {
      img: "/img/5.png",
      title: "Самокат Micro Sprite",
      price: 770,
    },
    {
      img: "/img/6.png",
      title: "Роликові ковзани",
      price: 440,
    },
    {
      img: "/img/7.png",
      title: "Роликові ковзани",
      price: 440,
    },
    { img: "/img/8.png", title: "М'яка іграшка", price: 440 },
    {
      img: "/img/9.png",
      title: "М'яка іграшка",
      price: 440,
    },
    {
      img: "/img/10.png",
      title: "Подушка Огірок",
      price: 440,
    },
    {
      img: "/img/11.png",
      title: "Подушка пес Патрон",
      price: 440,
    },
    {
      img: "/img/12.png",
      title: "Ігровий набір",
      price: 440,
    },
    {
      img: "/img/13.png",
      title: "Ігровий набір",
      price: 440,
    },
    { img: "/img/14.png", title: "Пазли Знайди емоції", price: 440 },
    {
      img: "/img/15.png",
      title: "Пазли Казкові сни",
      price: 440,
    },
    {
      img: "/img/16.png",
      title: "Пазли Біла кішка у вінку",
      price: 440,
    },
  ]);
  const [cardsDrawer, setCardsDrawer] = useState([]);
  const [searchCards, setSearchCards] = useState("");

  const addCardsDrawer = (card) => {
    if (cardsDrawer.find((c) => c.title === card.title)) {
      setCardsDrawer((prev) => prev.filter((c) => c.title !== card.title));
    } else {
      setCardsDrawer([...cardsDrawer, card]);
    }
  };

  const onChangeSearchCards = (event) => {
    setSearchCards(event.target.value);
  };

  return (
    <>
      <div className="wrap">
        {drawer ? (
          <Drawer
            cardsDrawer={cardsDrawer}
            drawerClose={() => setDrawer(false)}
          />
        ) : null}
        <Header drawerOpen={() => setDrawer(true)} />
        <main className="main">
          <div className="main-input">
            <h2>
              {searchCards
                ? `Пошук за запитом: "${searchCards}"`
                : "Всі іграшки"}
            </h2>
            <input
              value={searchCards}
              onChange={onChangeSearchCards}
              placeholder="Пошук..."
              type=""
            />
          </div>

          <div className="main-content">
            {arrCards
              .filter((card) =>
                card.title.toLowerCase().includes(searchCards.toLowerCase())
              )
              .map((card, index) => (
                <Card
                  key={index}
                  addCard={() => addCardsDrawer(card)}
                  img={card.img}
                  title={card.title}
                  price={card.price}
                />
              ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
