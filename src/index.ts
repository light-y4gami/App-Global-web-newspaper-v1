import { responseNews, responseNewsArticle, responseNewsHealth, responseNewsScience, responseNewsMagazine } from "./apiService.js";
import * as htmlGenerator from "./htmlGenerator.js";
import { cleanInputHome, loadDataHome, loadDataSection, search } from "./searchService.js";


const hamburgerBtn = document.querySelector(".hamburger-btn") as HTMLObjectElement;
const menu = document.querySelector(".menu") as HTMLDListElement;
const btn = document.getElementById("hide") as HTMLButtonElement;
const home = document.getElementById('home') as HTMLAnchorElement;
const news = document.getElementById('news') as HTMLAnchorElement;
const sports = document.getElementById('health') as HTMLAnchorElement;
const science = document.getElementById('science') as HTMLAnchorElement;
const economy = document.getElementById('magazine') as HTMLAnchorElement;
const about = document.getElementById('about') as HTMLAnchorElement;

document.addEventListener('DOMContentLoaded', () => {
  // runs when content loads
  // then wait for the promise to resolve before calling injectsDocument to inject the data
  responseNews().then(() => {
    injectsDocument().then(() => {
    });
  });
  responseNewsArticle();
  responseNewsHealth();
  responseNewsScience();
  responseNewsMagazine();
  search();
  scrollBtn();
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle('is-active');
  menu.classList.toggle("open");
});

menu.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    const clickedText = event.target.textContent;
    renderMenuClics(clickedText);
  }
});

function renderMenuClics(clic: string | null) {
  let clikedSect = clic?.toLocaleLowerCase();
  hamburgerBtn.classList.remove("is-active");
  menu.classList.remove("open");

  switch (clikedSect?.substring(1)) {
    case "home":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderHome();
      break;
     
    case "news":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderNews();
      break;

    case "health":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderHealth();
      break;

    case "science":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderScience();
      break;

    case "magazine":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderMagazine();
      break;

    case "about":
      htmlGenerator.spinnerLoad();
      htmlGenerator.renderAbout();
      break;
  
    default:
      break;
  }
}

export function injectsDocument() {
  return new Promise<void>((resolve) => {
    htmlGenerator.renderHome();
    loadDataHome();
    resolve(); // resolves the promise when data injection is complete
  });
}

function scrollBtn() {
  window.addEventListener("scroll", () => {
    let scroll = Math.floor(scrollY);

    if (scroll > 2500) {
      btn.classList.remove("hide");
    } else {
      btn.classList.add("hide");
    }
  });

  btn.addEventListener("click", () => {
    scrollTo(0, 0);
  });
}

home.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderHome();
  loadDataSection("home");
  cleanInputHome();
});

news.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderNews();
  loadDataSection("news");
});

sports.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderHealth();
  loadDataSection("health");
});

science.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderScience();
  loadDataSection("science");
});

economy.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderMagazine();
  loadDataSection("magazine");
});

about.addEventListener('click', () => {
  htmlGenerator.spinnerLoad();
  htmlGenerator.renderAbout();
});
