import { responseNews, responseNewsArticle, responseNewsHealth, responseNewsScience, responseNewsMagazine } from "./apiService.js";
import * as htmlGenerator from "./htmlGenerator.js";
import { cleanInputHome, loadDataHome, loadDataSection, search } from "./searchService.js";
const hamburgerBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".menu");
const btn = document.getElementById("hide");
const home = document.getElementById('home');
const news = document.getElementById('news');
const sports = document.getElementById('health');
const science = document.getElementById('science');
const economy = document.getElementById('magazine');
const about = document.getElementById('about');
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
function renderMenuClics(clic) {
    let clikedSect = clic === null || clic === void 0 ? void 0 : clic.toLocaleLowerCase();
    hamburgerBtn.classList.remove("is-active");
    menu.classList.remove("open");
    switch (clikedSect === null || clikedSect === void 0 ? void 0 : clikedSect.substring(1)) {
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
    return new Promise((resolve) => {
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
        }
        else {
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
