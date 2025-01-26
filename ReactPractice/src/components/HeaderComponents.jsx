import "./HeaderComponent.css";


function HeaderComponents() {
  return (
    <header className="header">
      <h1 className="title">Header</h1>
      <nav>
        <ul className="header-list">
            <li>
                <a className= "links" href="/">Home</a>
            </li>
            <li>
                <a className= "links" href="/">Blog</a>
            </li>
            <li>
                <a className= "links" href="/">News</a>
            </li>
            <li>
                <a className= "links" href="/">Contact Us</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponents;