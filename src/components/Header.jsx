import "./Header.scss";

export function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img width={100} height={100} src="/img/logo.png" alt="" />
          <div className="header-info">
            <h1>Toys-shop</h1>
            <p>Магазин іграшок</p>
          </div>
        </div>

        <ul className="header-right">
          <li onClick={props.drawerOpen}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 61 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.5 24.6479H11C8.23858 24.6479 6 26.8865 6 29.648V67.1479C6 69.9094 8.23858 72.1479 11 72.1479H50.5C53.2614 72.1479 55.5 69.9094 55.5 67.1479V29.6479C55.5 26.8865 53.2614 24.6479 50.5 24.6479Z"
                stroke="white"
                stroke-width="3"
              />
              <path
                d="M18 33.648C18 33.648 42 3.648 28.5 6.148C15 8.648 42 33.648 42 33.648"
                stroke="white"
                stroke-width="3"
              />
            </svg>

            <span>1200 грн</span>
          </li>
        </ul>
      </header>
    </>
  );
}
