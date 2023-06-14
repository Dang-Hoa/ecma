import { getAll } from "../api/product";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "../lib";

const HomePage = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/projectList")
    //     .then((res) => res.json())
    //     .then((data) => setProject(data))
    getAll().then((data) => setProject(data))
  }, [])
  return /*html*/`
    ${Header()}
    <section id="banner">
      <div class="container">
        <!-- img -->
        <div class="banner__img">
          <img src="./src/img/banner-img.png" alt="illustration of women" />
        </div>
        <!-- heading -->
        <div class="banner__heading">
          <h1>Hello, I'm Hoa</h1>
          <p style="font-size: 20px;">
          Hello, I'm Hoa
          I am a front-end developer
          </p>
          <a href="#"><button class="banner__btn">View More</button></a>
        </div>
      </div>
    </section>
    <!-- things -->
    <section id="things">
      <div class="container">
        <!-- dec -->
        <div class="things__dec">
          <img src="./src/img/things-dec-l.png" alt="illustration of leaf" />
        </div>
        <!-- dec -->
        <div class="things__dec">
          <img src="./src/img/things-dec-r.png" alt="illustration of leaf" />
        </div>
        <!-- heading -->
        <h2>Things I Do</h2>
        <!-- item 1 -->
        ${project.map((item) => {
    return/*html*/`
          <div class="things__item">
          <!-- img -->
          <img src="${item.img}" alt="illustration of women" />
          <!-- text -->
          <div class="things__item--heading">
            <h3>${item.title}</h3>
            <p>
             ${item.content}
            </p>
          </div>
        </div>
          `
  })}
        
      </div>
    </section>
    <!-- works -->
    <section id="works">
      <div class="container">
        <!-- dec -->
        <div class="works__dec">
          <img src="./src/img/work-dec.png" alt="illustration of leaf" />
        </div>
        <div class="works__dec">
          <img src="./src/img/work-dec.png" alt="illustration of leaf" />
        </div>
        <!-- heading -->
        <h2>Recent Works</h2>
        <!-- img -->
        <div class="works__img">
        ${project.map((item) => {
    return `
          <div class="works__img--single">
          <img src="${item.img}" alt="bag" />
        </div>
          `
  })}
        <!-- btn -->
        <div class="works__btn">
          <a href="#"><button>View Works</button></a>
        </div>
      </div>
    </section>
    <!-- footer -->
    ${Footer()}  
    `
}

export default HomePage
