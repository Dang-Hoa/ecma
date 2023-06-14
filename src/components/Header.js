import { useEffect, useState } from "../lib"

const Header = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/menu`)
            .then((res) => res.json())
            .then((data) => setMenu(data))
    }, [])
    return /*html*/`
    <header>
    <div class="container">
      <nav class="navbar">
        <!-- logo -->
        <div class="navbar__logo">
          <img src="./src/img/logo.svg" alt="website logo" />
        </div>
        <!-- links -->
        <ul class="navbar__links">
          <li class="navbar__link"><a href="#works">Work</a></li>
          <li class="navbar__link"><a href="#things">About</a></li>
          <li class="navbar__link"><a href="#works">Resume</a></li>
          <a href="#footer"><button class="navbar__btn">Contact</button></a>
        </ul>
        <!-- menu button -->
        <div class="navbar__icons">
          <div class="navbar__icon"></div>
        </div>
      </nav>
    </div>
  </header>
  `
}

export default Header