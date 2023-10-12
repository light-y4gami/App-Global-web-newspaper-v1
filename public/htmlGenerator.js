import { objNewsArticle, objNewsHealth, objNewsScience, objNewsMagazine, objNews, } from "./apiService.js";
import { input } from "./searchService.js";
let statusClass = document.getElementById("hero");
let fragment = document.createDocumentFragment();
const firstTitleArticles = document.getElementById("firstTitleArticles");
const secondTitleArticles = document.getElementById("secondTitleArticles");
const firstContainerBtn = document.getElementById("firstContainerBtn");
const secondContainerBtn = document.getElementById("secondContainerBtn");
const firstContainerCard = document.getElementById("firstContainerCard");
const secondContainerCard = document.getElementById("secondContainerCard");
const mainContainer = document.getElementById("main");
const title = document.querySelector("title");
const heroTitle = document.querySelector(".hero-h1");
const heroP = document.querySelector(".hero-p");
const firstSvg = document.getElementById("firstSvg");
const secondSvg = document.getElementById("secondSvg");
const spinnerBg = document.getElementById("spinnerBg");
const spinner = document.getElementById("spinner");
// store the news titles related to their corresponding section
const titleSectionHome = [];
const titleSectionNews = [];
const titleSectionHealth = [];
const titleSectionScience = [];
const titleSectionMagazine = [];
var timer;
export function spinnerLoad() {
    spinnerBg.removeAttribute("style");
    spinner.removeAttribute("style");
}
function spinnerStop() {
    let count = 0;
    setTimeout(() => {
        spinnerBg.style.display = "none";
        spinner.style.display = "none";
    }, 1500);
}
function removeAndAddClassesHome() {
    let count = 0;
    timer = setTimeout(() => {
        firstSvg.classList.remove("yogaSvg");
        secondSvg.classList.remove("coffeFriendsSvg");
        firstSvg.classList.remove("launchingSvg");
        secondSvg.classList.remove("lightbulbMomentSvg");
        secondSvg.classList.remove("officeSvg");
        heroP.classList.remove("hideElements");
        firstContainerBtn.classList.remove("hideElements");
        secondContainerBtn.classList.remove("hideElements");
        firstContainerCard.classList.remove("hideElements");
        secondContainerCard.classList.remove("hideElements");
        firstSvg.classList.remove("magazineSvg");
        statusClass.classList.remove("heroNews");
        statusClass.classList.remove("heroHealth");
        statusClass.classList.remove("heroScience");
        statusClass.classList.remove("heroMagazine");
        statusClass.classList.remove("heroAbout");
        statusClass.classList.add("heroHome");
        firstSvg.classList.add("firstSvg");
        secondSvg.classList.add("secondSvg");
        heroTitle.removeAttribute("style");
        heroP.removeAttribute("style");
        heroTitle.innerText = "Your Newspaper even Close";
        heroP.innerText = "Find out about everything that happens in the world, stay informed with the current news";
        heroP.innerHTML += `<br><small>Written by: Light Yagami.</small>`;
        heroP.innerHTML += `<br><small>Image from unsplash created by Luca Bravo.</small>`;
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function removeAndAddClassesNews() {
    let count = 0;
    timer = setTimeout(() => {
        statusClass.classList.remove(statusClass.className);
        firstSvg.classList.remove("firstSvg");
        secondSvg.classList.remove("secondSvg");
        firstSvg.classList.remove("launchingSvg");
        secondSvg.classList.remove("lightbulbMomentSvg");
        firstSvg.classList.remove("magazineSvg");
        secondSvg.classList.remove("officeSvg");
        firstSvg.classList.remove("yogaSvg");
        secondSvg.classList.remove("coffeFriendsSvg");
        heroP.classList.remove("hideElements");
        firstContainerBtn.classList.remove("hideElements");
        secondContainerBtn.classList.remove("hideElements");
        firstContainerCard.classList.remove("hideElements");
        secondContainerCard.classList.remove("hideElements");
        statusClass.classList.remove("heroAbout");
        statusClass.classList.add("heroNews");
        heroTitle.removeAttribute("style");
        heroP.removeAttribute("style");
        heroTitle.innerText = "Most popular news";
        heroP.innerText = "Read the most recent articles of the last seven days";
        heroP.innerHTML += `<br><small>Written by: Light Yagami</small>`;
        heroP.innerHTML += `<br><small>Adobe Stock image for desktop version created by Busra and the image for mobile devices was created by Paul Bradbury/Caia Image.</small>`;
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function removeAndAddClassesHealth() {
    let count = 0;
    timer = setTimeout(() => {
        firstSvg.classList.remove("firstSvg");
        secondSvg.classList.remove("secondSvg");
        firstSvg.classList.remove("launchingSvg");
        secondSvg.classList.remove("lightbulbMomentSvg");
        secondSvg.classList.remove("officeSvg");
        firstSvg.classList.add("yogaSvg");
        secondSvg.classList.add("coffeFriendsSvg");
        firstSvg.classList.remove("magazineSvg");
        heroP.classList.remove("hideElements");
        firstContainerBtn.classList.remove("hideElements");
        secondContainerBtn.classList.remove("hideElements");
        firstContainerCard.classList.remove("hideElements");
        secondContainerCard.classList.remove("hideElements");
        statusClass.classList.remove("heroHome");
        statusClass.classList.remove("heroNews");
        statusClass.classList.remove("heroScience");
        statusClass.classList.remove("heroMagazine");
        statusClass.classList.remove("heroAbout");
        statusClass.classList.add("heroHealth");
        heroTitle.removeAttribute("style");
        heroP.removeAttribute("style");
        heroTitle.innerText = "The most interesting health news.";
        heroP.innerText = "Exercise is key for mental and physical health.";
        heroP.innerHTML += `<br><small>Written by: Light Yagami</small>`;
        heroP.innerHTML += `<br><small>Adobe Stock image desktop version created by Dusko and the image for mobile devices was created by F8 Suport Ukraine.</small>`;
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function removeAndAddClassesScience() {
    let count = 0;
    timer = setTimeout(() => {
        firstSvg.classList.remove("firstSvg");
        secondSvg.classList.remove("secondSvg");
        firstSvg.classList.remove("magazineSvg");
        secondSvg.classList.remove("officeSvg");
        firstSvg.classList.remove("yogaSvg");
        secondSvg.classList.remove("coffeFriendsSvg");
        heroP.classList.remove("hideElements");
        firstContainerBtn.classList.remove("hideElements");
        secondContainerBtn.classList.remove("hideElements");
        firstContainerCard.classList.remove("hideElements");
        secondContainerCard.classList.remove("hideElements");
        statusClass.classList.remove("heroHome");
        statusClass.classList.remove("heroNews");
        statusClass.classList.remove("heroHealth");
        statusClass.classList.remove("heroMagazine");
        statusClass.classList.remove("heroAbout");
        firstSvg.classList.add("launchingSvg");
        secondSvg.classList.add("lightbulbMomentSvg");
        statusClass.classList.add("heroScience");
        heroTitle.removeAttribute("style");
        heroP.removeAttribute("style");
        heroTitle.innerText = "Scientific articles instantly";
        heroP.innerText = "Read about the latest scientific advances";
        heroP.innerHTML += `<br><small>Written by: Light Yagami</small>`;
        heroP.innerHTML += `<br><small>Image from Adobe Stock created by Shaiith.</small>`;
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function removeAndAddClassesMagazine() {
    let count = 0;
    timer = setTimeout(() => {
        firstSvg.classList.remove("firstSvg");
        secondSvg.classList.remove("secondSvg");
        firstSvg.classList.remove("yogaSvg");
        secondSvg.classList.remove("coffeFriendsSvg");
        firstSvg.classList.remove("launchingSvg");
        secondSvg.classList.remove("lightbulbMomentSvg");
        heroP.classList.remove("hideElements");
        firstContainerCard.classList.remove("hideElements");
        secondContainerCard.classList.remove("hideElements");
        firstContainerBtn.classList.remove("hideElements");
        secondContainerBtn.classList.remove("hideElements");
        statusClass.classList.remove("heroHome");
        statusClass.classList.remove("heroNews");
        statusClass.classList.remove("heroHealth");
        statusClass.classList.remove("heroScience");
        statusClass.classList.remove("heroAbout");
        firstSvg.classList.add("magazineSvg");
        secondSvg.classList.add("officeSvg");
        statusClass.classList.add("heroMagazine");
        heroTitle.removeAttribute("style");
        heroP.removeAttribute("style");
        heroTitle.innerText = "Adding moments of good reading to a life full of the best stories";
        heroP.innerText = "21St Century Magazine";
        heroP.innerHTML += `<br><small>Written by: Light Yagami</small>`;
        heroP.innerHTML += `<br><small>Image from Adobe Stock created by Olly.</small>`;
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function removeAndAddClassesAbout() {
    let count = 0;
    timer = setTimeout(() => {
        firstSvg.classList.remove("firstSvg");
        secondSvg.classList.remove("secondSvg");
        firstSvg.classList.remove("launchingSvg");
        secondSvg.classList.remove("lightbulbMomentSvg");
        firstSvg.classList.remove("magazineSvg");
        secondSvg.classList.remove("officeSvg");
        firstSvg.classList.remove("yogaSvg");
        secondSvg.classList.remove("coffeFriendsSvg");
        statusClass.classList.remove("heroHome");
        statusClass.classList.remove("heroNews");
        statusClass.classList.remove("heroHealth");
        statusClass.classList.remove("heroScience");
        statusClass.classList.remove("heroMagazine");
        firstTitleArticles.classList.add("hideElements");
        firstContainerBtn.classList.add("hideElements");
        secondContainerBtn.classList.add("hideElements");
        firstContainerCard.classList.add("hideElements");
        secondContainerCard.classList.add("hideElements");
        secondTitleArticles.classList.add("hideElements");
        statusClass.classList.add("heroAbout");
        heroTitle.innerText = "More about this project";
        heroTitle.style.textShadow = "2px 2px 2px black";
        heroP.innerText = "";
        heroP.innerHTML += `<small>Adobe Stock image desktop version created by Sensvector and the image for mobile devices was created by deagreez.</small>`;
        heroP.style.color = "black";
        heroP.style.fontSize = "20px";
        heroP.style.fontWeight = "400";
        count++;
        spinnerStop();
        stopTimeout(count);
    }, 4000);
}
function stopTimeout(c) {
    if (c > 0) { // if c > 0 the setTimeut was removed without problems
        clearTimeout(timer);
        // check if the setTimeout was removed successfully
        if (clearTimeout(timer) === undefined) { }
    }
}
export function renderHome() {
    if (mainContainer.classList.contains("container")) {
        mainContainer.classList.remove("container");
        mainContainer.classList.add("container-fluid");
        mainContainer.classList.add("custom-container");
    }
    title.innerText = "Home - Global web newspaper";
    removeAndAddClassesHome();
    input.disabled = false;
    setTimeout(() => {
        title.innerText = "Global web newspaper";
    }, 6000);
    mainContainer.innerHTML = "";
    generateHomeSection();
}
function generateHomeSection() {
    const h2TitleSection = document.createElement("h2");
    h2TitleSection.innerText = "Today's News";
    h2TitleSection.classList.add("text-center", "most-popular", "mb-3");
    mainContainer.appendChild(h2TitleSection);
    titleSectionHome.length = 0; // clean the array before adding titles
    objNews.forEach((news) => {
        let sectStr = news.section;
        let date = new Date(news.published_date);
        const divCard = document.createElement("div");
        divCard.classList.add("card", "mb-5");
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        const a = document.createElement("a");
        a.classList.add("linkNewsCard");
        const aTitle = document.createElement("h5");
        aTitle.classList.add("card-title", "customCardTitleNews");
        aTitle.innerHTML += news.title;
        a.appendChild(aTitle);
        const pAbstract = document.createElement("p");
        pAbstract.classList.add("card-text");
        pAbstract.innerHTML += news.abstract;
        const pSection = document.createElement("p");
        pSection.classList.add("text-body-secondary");
        pSection.innerHTML += `Section: ${sectStr.charAt(0).toUpperCase() + sectStr.slice(1)}`;
        const pByline = document.createElement("p");
        pByline.classList.add("text-body-secondary");
        pByline.innerHTML += news.byline;
        const pUpdated = document.createElement("p");
        pUpdated.classList.add("text-body-secondary");
        pUpdated.innerHTML += `Last update: ${date.toLocaleDateString()}`;
        const image = document.createElement("img");
        image.classList.add("card-img-bottom");
        image.setAttribute("src", news.image);
        image.setAttribute("alt", news.title);
        a.classList.add("url");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("href", news.url);
        divCardBody.appendChild(a);
        divCardBody.appendChild(pAbstract);
        divCardBody.appendChild(pSection);
        divCardBody.appendChild(pByline);
        divCardBody.appendChild(pUpdated);
        divCard.appendChild(divCardBody);
        divCard.appendChild(image);
        fragment.appendChild(divCard);
        titleSectionHome.push(news.title); // save news headlines
    });
    mainContainer.appendChild(fragment);
}
export function renderNews() {
    if (mainContainer.classList.contains("container-fluid")) {
        mainContainer.classList.remove("container-fluid");
        mainContainer.classList.remove("custom-container");
        mainContainer.classList.add("container");
    }
    title.innerText = "News - Global web newspaper";
    removeAndAddClassesNews();
    input.disabled = false;
    mainContainer.innerHTML = "";
    generateNewsSection();
}
function generateNewsSection() {
    const h2TitleSection = document.createElement("h2");
    h2TitleSection.innerText = "Today's Articles";
    h2TitleSection.classList.add("text-center", "most-popular", "mb-3");
    mainContainer.appendChild(h2TitleSection);
    titleSectionNews.length = 0; // clean the array before adding titles
    objNewsArticle.forEach((newsArticle) => {
        let date = new Date(newsArticle.published_date);
        const divCard = document.createElement("div");
        divCard.classList.add("card", "text-center", "mt-3", "mb-3");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.innerHTML += newsArticle.byline;
        divCard.appendChild(cardHeader);
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        cardHeader.appendChild(divCardBody);
        const h5TitleCard = document.createElement("h5");
        h5TitleCard.classList.add("card-title-two");
        h5TitleCard.innerHTML += newsArticle.title;
        divCardBody.appendChild(h5TitleCard);
        const pCardText = document.createElement("p");
        pCardText.classList.add("card-text");
        pCardText.innerText += newsArticle.abstract;
        divCardBody.appendChild(pCardText);
        const aBtnReadMore = document.createElement("a");
        aBtnReadMore.innerText = "Read More";
        aBtnReadMore.classList.add("btn", "btn-primary", "bt-custom");
        aBtnReadMore.setAttribute("target", "_blank");
        aBtnReadMore.setAttribute("rel", "noopener noreferrer");
        aBtnReadMore.setAttribute("href", newsArticle.url);
        divCardBody.appendChild(aBtnReadMore);
        const divCardFooter = document.createElement("div");
        divCardFooter.classList.add("card-footer", "text-body-secondary");
        divCardFooter.innerText += `Last update: ${date.toLocaleDateString()}`;
        divCard.appendChild(divCardFooter);
        fragment.appendChild(divCard);
        titleSectionNews.push(newsArticle.title); // save news headlines
    });
    mainContainer.appendChild(fragment);
}
export function renderHealth() {
    if (mainContainer.classList.contains("container")) {
        mainContainer.classList.remove("container");
        mainContainer.classList.add("container-fluid");
        mainContainer.classList.add("custom-container");
    }
    title.innerText = "Health - Global web newspaper";
    removeAndAddClassesHealth();
    input.disabled = false;
    mainContainer.innerHTML = "";
    generateHealthSection();
}
function generateHealthSection() {
    const h2TitleSection = document.createElement("h2");
    h2TitleSection.classList.add("text-center", "most-popular", "mb-3");
    h2TitleSection.innerText = "Today's Health";
    mainContainer.appendChild(h2TitleSection);
    titleSectionHealth.length = 0; // clean the array before adding titles
    objNewsHealth.forEach((newsHealth) => {
        let sectStr = newsHealth.section;
        let date = new Date(newsHealth.published_date);
        const divCard = document.createElement("div");
        divCard.classList.add("card", "mb-5");
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        const a = document.createElement("a");
        a.classList.add("linkNewsCard");
        const aTitle = document.createElement("h5");
        aTitle.classList.add("card-title", "customCardTitleNews");
        aTitle.innerHTML += newsHealth.title;
        a.appendChild(aTitle);
        const pAbstract = document.createElement("p");
        pAbstract.classList.add("card-text");
        pAbstract.innerHTML += newsHealth.abstract;
        const pSection = document.createElement("p");
        pSection.classList.add("text-body-secondary");
        pSection.innerHTML += `Section: ${sectStr.charAt(0).toUpperCase() + sectStr.slice(1)}`;
        const pByline = document.createElement("p");
        pByline.classList.add("text-body-secondary");
        pByline.innerHTML += newsHealth.byline;
        const pUpdated = document.createElement("p");
        pUpdated.classList.add("text-body-secondary");
        pUpdated.innerText = `Last update: ${date.toLocaleDateString()}`;
        const image = document.createElement("img");
        image.classList.add("card-img-bottom");
        image.setAttribute("src", newsHealth.multimedia);
        image.setAttribute("alt", newsHealth.title);
        a.classList.add("url");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("href", newsHealth.url);
        divCardBody.appendChild(a);
        divCardBody.appendChild(pAbstract);
        divCardBody.appendChild(pSection);
        divCardBody.appendChild(pByline);
        divCardBody.appendChild(pUpdated);
        divCard.appendChild(divCardBody);
        divCard.appendChild(image);
        fragment.appendChild(divCard);
        titleSectionHealth.push(newsHealth.title); // save news headlines
    });
    mainContainer.appendChild(fragment);
}
export function renderScience() {
    if (mainContainer.classList.contains("container")) {
        mainContainer.classList.remove("container");
        mainContainer.classList.add("container-fluid");
        mainContainer.classList.add("custom-container");
    }
    title.innerText = "Science - Global web newspaper";
    removeAndAddClassesScience();
    input.disabled = false;
    mainContainer.innerHTML = "";
    generateScienceSection();
}
function generateScienceSection() {
    const h2TitleSection = document.createElement("h2");
    h2TitleSection.innerText = "Today's Science";
    h2TitleSection.classList.add("text-center", "most-popular", "mb-3");
    mainContainer.appendChild(h2TitleSection);
    titleSectionScience.length = 0; // clean the array before adding titles
    objNewsScience.forEach((newsScience) => {
        let sectStr = newsScience.section;
        let date = new Date(newsScience.published_date);
        const divCard = document.createElement("div");
        divCard.classList.add("card", "mb-5");
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        const a = document.createElement("a");
        a.classList.add("linkNewsCard");
        const aTitle = document.createElement("h5");
        aTitle.classList.add("card-title", "customCardTitleNews");
        aTitle.innerHTML += newsScience.title;
        a.appendChild(aTitle);
        const pAbstract = document.createElement("p");
        pAbstract.classList.add("card-text");
        pAbstract.innerHTML += newsScience.abstract;
        const pSection = document.createElement("p");
        pSection.classList.add("text-body-secondary");
        pSection.innerHTML += `Section: ${sectStr.charAt(0).toUpperCase() + sectStr.slice(1)}`;
        const pByline = document.createElement("p");
        pByline.classList.add("text-body-secondary");
        pByline.innerHTML += newsScience.byline;
        const pUpdated = document.createElement("p");
        pUpdated.classList.add("text-body-secondary");
        pUpdated.innerHTML += `Last update: ${date.toLocaleDateString()}`;
        const image = document.createElement("img");
        image.classList.add("card-img-bottom");
        image.setAttribute("src", newsScience.multimedia);
        image.setAttribute("alt", newsScience.title);
        a.classList.add("url");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("href", newsScience.url);
        divCardBody.appendChild(a);
        divCardBody.appendChild(pAbstract);
        divCardBody.appendChild(pSection);
        divCardBody.appendChild(pByline);
        divCardBody.appendChild(pUpdated);
        divCard.appendChild(divCardBody);
        divCard.appendChild(image);
        fragment.appendChild(divCard);
        titleSectionScience.push(newsScience.title); // save news headlines
    });
    mainContainer.appendChild(fragment);
}
export function renderMagazine() {
    if (mainContainer.classList.contains("container")) {
        mainContainer.classList.remove("container");
        mainContainer.classList.add("container-fluid");
        mainContainer.classList.add("custom-container");
    }
    title.innerText = "Magazine - Global web newspaper";
    removeAndAddClassesMagazine();
    input.disabled = false;
    mainContainer.innerHTML = "";
    generateMagazineSection();
}
function generateMagazineSection() {
    const h2TitleSection = document.createElement("h2");
    h2TitleSection.classList.add("text-center", "most-popular", "mb-3");
    h2TitleSection.innerHTML = "Today's Magazine";
    mainContainer.appendChild(h2TitleSection);
    titleSectionMagazine.length = 0; // clean the array before adding titles
    objNewsMagazine.forEach((newsMagazine) => {
        let sectStr = newsMagazine.section;
        let date = new Date(newsMagazine.published_date);
        const divCard = document.createElement("div");
        divCard.classList.add("card", "mt-4", "mb-4");
        divCard.style.maxWidth = "1080px";
        const divRow = document.createElement("div");
        divRow.classList.add("row", "g-0");
        const divColFirst = document.createElement("div");
        divColFirst.classList.add("col-md-4");
        const image = document.createElement("img");
        image.classList.add("img-fluid", "rounded-start");
        image.style.height = "100%";
        image.setAttribute("src", newsMagazine.multimedia);
        image.setAttribute("alt", newsMagazine.title);
        divColFirst.appendChild(image);
        divRow.appendChild(divColFirst);
        const divColSecond = document.createElement("div");
        divColSecond.classList.add("col-md-8");
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        const pByline = document.createElement("p");
        pByline.innerHTML += newsMagazine.byline;
        pByline.classList.add("card-text");
        divCardBody.appendChild(pByline);
        const a = document.createElement("a");
        a.classList.add("linkNewsCard");
        a.setAttribute("href", newsMagazine.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        const h5TitleCard = document.createElement("h5");
        h5TitleCard.classList.add("card-title", "customCardTitleNews");
        h5TitleCard.innerHTML += newsMagazine.title;
        a.appendChild(h5TitleCard);
        divCardBody.appendChild(a);
        const pAbstract = document.createElement("p");
        pAbstract.classList.add("card-text");
        pAbstract.innerHTML += newsMagazine.abstract;
        divCardBody.appendChild(pAbstract);
        const pSection = document.createElement("p");
        pSection.classList.add("card-text");
        pSection.innerText += `Section: ${sectStr.charAt(0).toUpperCase() + sectStr.slice(1)}`;
        divCardBody.appendChild(pSection);
        const pUpdated = document.createElement("p");
        pUpdated.classList.add("card-text");
        const textSmall = document.createElement("small");
        textSmall.classList.add("text-body-secondary");
        textSmall.innerHTML += `Last update: ${date.toLocaleDateString()}`;
        pUpdated.appendChild(textSmall);
        divCardBody.appendChild(pUpdated);
        divColSecond.appendChild(divCardBody);
        divRow.appendChild(divColSecond);
        divCard.appendChild(divRow);
        fragment.appendChild(divCard);
        titleSectionMagazine.push(newsMagazine.title); // save news headlines
    });
    mainContainer.appendChild(fragment);
}
export function renderAbout() {
    if (mainContainer.classList.contains("container-fluid")) {
        mainContainer.classList.remove("container-fluid");
        mainContainer.classList.remove("custom-container");
        mainContainer.classList.add("container");
    }
    title.innerText = "About - Global web newspaper";
    input.disabled = true; // disable input in About section
    const aboutContent = {
        sections: [
            {
                title: "What is Global Web Newspaper?",
                content: `
          <p>
            <b>Global Web Newspaper</b> is an online news platform that gives you quick and easy access to the latest news in various categories, from sports to technology. 
            My mission is to provide you with up-to-date information in a convenient manner. It is a non-profit project with educational reasons. You can easily search for articles on topics of interest to you, 
            and go directly to the official article in <b>The New York Times</b> to read it. 
            I must confess that the weeks it took me to develop this project were incredible, as I am still learning and strengthening my knowledge, there were moments, 
            in fact days, in which I got stuck on logic errors or errors with the handling of <b>TypeScript</b>, and believe me I did not I regret My mentality in software development and in life is <b>“fight until the last drop of blood”</b>, 
            I feel that the ability to tell myself <b>“Keep working”</b> whenever I feel like I can't take it anymore, will help me grow and become a Software Engineer. expert software in the technologies you choose, to integrate into the skills kit.
          </p>
        `,
            },
            {
                title: "Used technology:",
                content: `
          <p>
            I've built this platform using a combination of technologies including <b>HTML and CSS</b> for structure and layout, <b>TypeScript</b> for functionality, and <b>Bootstrap 5</b> for an attractive user interface. 
            Additionally, we use the <b>New York Times API</b> to get the latest and most trusted news.
            <b>Bootstrap 5</b> plays an important role in this project as it saved me some extra hours as well as having to develop some things myself. 
            Apart from that, I learned how to work with a library and I got the spark to spend some time learning about different libraries that will surely make my work much more fun.     
            What can I say about <b>TypeScript</b>... I learned to code with <b>JavaScript</b> and then a friend mentioned <b>TypeScript</b> to me and its way of handling data with its static type system and WOW, 
            I honestly fell in love with <b>TypeScript</b>. All functionality of this site is completely built with <b>TypeScript</b>.
            Working with the <b>New York Times REST API</b> was rewarding, the way it is designed is simply incredible. Below I list all the technologies used in this project.
          </p>
          <ol>
            <li>Html and Css</li>
            <li>TypeScript</li>
            <li>Bootstrap 5</li>
            <li>Bootswatch</li>
            <li>Nytimes API</li>
            <li>Svgbackground</li>
            <li>Undraw</li>
            <li>Getwaves.io</li>
            <li>Google Fonts</li>
            <li>Unsplash</li>
            <li>Adobe Stock</li>
          </ol>
        `,
            },
            {
                title: "Who is behind this?",
                content: `
          <p>
          Hello! I'm <b>Light Yagami</b> (yes, I took the name from my favorite anime). 
          I am a self-taught person from the <b>Dominican Republic</b> passionate about frontend development. 
          My goal is to become an excellent software engineer, and projects like this help me learn and grow. 
          Although I don't have a web portfolio yet, I'm excited for the future and to continue building amazing things. 
          I demand a lot from myself to be better than what I was yesterday. 
          If I feel tired I tell myself <b>“Keep working”</b>, if I am happy <b>“Keep working”</b>, if I have an error in the code that I don't know how to do at that moment. 
          hell fix it <b>“Keep working”</b>, impostor syndrome <b>“Keep working”</b>, and so on until I get what I want. <b>“Keep working”.</b>
          </p>
        `,
            },
            {
                title: "The future",
                content: `
          <p>
            I plan to explore new technologies, such as <b>Angular</b>, <b>React</b>, <b>VueJS</b>, etc. 
            I am always excited about what the future can bring. Big driving force is that I am obsessed with learning, 
            I always need to be learning, otherwise I feel like I am wasting my time. My great desire is to enter university to study Software Engineering, 
            but until that day comes, I will continue to learn everything I can on my own and enjoy the journey as a software development apprentice.
            In the footer you can find links to my social networks, in case you want to follow me.
          </p>
          <p>
            Thank you for joining this journey with me!
          </p>
        `,
            },
        ],
    };
    let aboutHTML = "";
    aboutContent.sections.forEach((section) => {
        aboutHTML += `<h3>${section.title}</h3>${section.content}`;
    });
    mainContainer.innerHTML = aboutHTML;
    removeAndAddClassesAbout();
}
export function renderMatchingObject(o, sect, input) {
    switch (sect) {
        case "home":
            let sectStr = o.section;
            let date = new Date(o.published_date);
            const divCard = document.createElement("div");
            divCard.classList.add("card", "mb-5");
            const divCardBody = document.createElement("div");
            divCardBody.classList.add("card-body");
            const a = document.createElement("a");
            a.classList.add("linkNewsCard");
            const aTitle = document.createElement("h5");
            aTitle.classList.add("card-title", "customCardTitleNews");
            aTitle.innerHTML += o.title;
            a.appendChild(aTitle);
            const pAbstract = document.createElement("p");
            pAbstract.classList.add("card-text");
            pAbstract.innerHTML += o.abstract;
            const pSection = document.createElement("p");
            pSection.classList.add("text-body-secondary");
            pSection.innerHTML += `Section: ${sectStr.charAt(0).toUpperCase() + sectStr.slice(1)}`;
            const pByline = document.createElement("p");
            pByline.classList.add("text-body-secondary");
            pByline.innerHTML += o.byline;
            const pUpdated = document.createElement("p");
            pUpdated.classList.add("text-body-secondary");
            pUpdated.innerHTML += `Last update: ${date.toLocaleDateString()}`;
            const image = document.createElement("img");
            image.classList.add("card-img-bottom");
            image.setAttribute("src", o.image);
            image.setAttribute("alt", o.title);
            a.classList.add("url");
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
            a.setAttribute("href", o.url);
            divCardBody.appendChild(a);
            divCardBody.appendChild(pAbstract);
            divCardBody.appendChild(pSection);
            divCardBody.appendChild(pByline);
            divCardBody.appendChild(pUpdated);
            divCard.appendChild(divCardBody);
            divCard.appendChild(image);
            fragment.appendChild(divCard);
            const h2Element = mainContainer.querySelector("h2");
            // remove all child elements after element h2
            if (h2Element) {
                let nextSibling = h2Element.nextSibling;
                while (nextSibling) {
                    mainContainer.removeChild(nextSibling);
                    nextSibling = h2Element.nextSibling;
                }
                mainContainer.insertBefore(fragment, h2Element.nextSibling);
            }
            if (input.length === 0) {
                mainContainer.innerHTML = ""; // clean the container
                generateHomeSection();
            }
            break;
        case "news":
            let dateSectNews = new Date(o.published_date);
            const divCardSectNews = document.createElement("div");
            divCardSectNews.classList.add("card", "text-center", "mt-3", "mb-3");
            const cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.innerHTML += o.byline;
            divCardSectNews.appendChild(cardHeader);
            const divCardBodySectNews = document.createElement("div");
            divCardBodySectNews.classList.add("card-body");
            cardHeader.appendChild(divCardBodySectNews);
            const h5TitleCardSectNews = document.createElement("h5");
            h5TitleCardSectNews.classList.add("card-title-two");
            h5TitleCardSectNews.innerHTML += o.title;
            divCardBodySectNews.appendChild(h5TitleCardSectNews);
            const pCardText = document.createElement("p");
            pCardText.classList.add("card-text");
            pCardText.innerText += o.abstract;
            divCardBodySectNews.appendChild(pCardText);
            const aBtnReadMore = document.createElement("a");
            aBtnReadMore.innerText = "Read More";
            aBtnReadMore.classList.add("btn", "btn-primary", "bt-custom");
            aBtnReadMore.setAttribute("target", "_blank");
            aBtnReadMore.setAttribute("rel", "noopener noreferrer");
            aBtnReadMore.setAttribute("href", o.url);
            divCardBodySectNews.appendChild(aBtnReadMore);
            const divCardFooter = document.createElement("div");
            divCardFooter.classList.add("card-footer", "text-body-secondary");
            divCardFooter.innerText += `Last update: ${dateSectNews.toLocaleDateString()}`;
            divCardSectNews.appendChild(divCardFooter);
            fragment.appendChild(divCardSectNews);
            const h2SectNews = mainContainer.querySelector("h2");
            // remove all child elements after element h2
            if (h2SectNews) {
                let nextSibling = h2SectNews.nextSibling;
                while (nextSibling) {
                    mainContainer.removeChild(nextSibling);
                    nextSibling = h2SectNews.nextSibling;
                }
                mainContainer.insertBefore(fragment, h2SectNews.nextSibling);
            }
            if (input.length === 0) {
                mainContainer.innerHTML = ""; // clean the container
                generateNewsSection();
            }
            break;
        case "health":
            let sectStrSectHealth = o.section;
            let dateSectHealth = new Date(o.published_date);
            const divCardSectHealth = document.createElement("div");
            divCardSectHealth.classList.add("card", "mb-5");
            const divCardBodySectHealth = document.createElement("div");
            divCardBodySectHealth.classList.add("card-body");
            const aSectHealth = document.createElement("a");
            aSectHealth.classList.add("linkNewsCard");
            const aTitleSectHealth = document.createElement("h5");
            aTitleSectHealth.classList.add("card-title", "customCardTitleNews");
            aTitleSectHealth.innerHTML += o.title;
            aSectHealth.appendChild(aTitleSectHealth);
            const pAbstractSectHealth = document.createElement("p");
            pAbstractSectHealth.classList.add("card-text");
            pAbstractSectHealth.innerHTML += o.abstract;
            const pSectionHealth = document.createElement("p");
            pSectionHealth.classList.add("text-body-secondary");
            pSectionHealth.innerHTML += `Section: ${sectStrSectHealth.charAt(0).toUpperCase() + sectStrSectHealth.slice(1)}`;
            const pBylineSectHealth = document.createElement("p");
            pBylineSectHealth.classList.add("text-body-secondary");
            pBylineSectHealth.innerHTML += o.byline;
            const pUpdatedSectHealth = document.createElement("p");
            pUpdatedSectHealth.classList.add("text-body-secondary");
            pUpdatedSectHealth.innerText = `Last update: ${dateSectHealth.toLocaleDateString()}`;
            const imageSectHealth = document.createElement("img");
            imageSectHealth.classList.add("card-img-bottom");
            imageSectHealth.setAttribute("src", o.multimedia);
            imageSectHealth.setAttribute("alt", o.title);
            aSectHealth.classList.add("url");
            aSectHealth.setAttribute("target", "_blank");
            aSectHealth.setAttribute("rel", "noopener noreferrer");
            aSectHealth.setAttribute("href", o.url);
            divCardBodySectHealth.appendChild(aSectHealth);
            divCardBodySectHealth.appendChild(pAbstractSectHealth);
            divCardBodySectHealth.appendChild(pSectionHealth);
            divCardBodySectHealth.appendChild(pBylineSectHealth);
            divCardBodySectHealth.appendChild(pUpdatedSectHealth);
            divCardSectHealth.appendChild(divCardBodySectHealth);
            divCardSectHealth.appendChild(imageSectHealth);
            fragment.appendChild(divCardSectHealth);
            const h2SectHealth = mainContainer.querySelector("h2");
            // remove all child elements after element h2
            if (h2SectHealth) {
                let nextSibling = h2SectHealth.nextSibling;
                while (nextSibling) {
                    mainContainer.removeChild(nextSibling);
                    nextSibling = h2SectHealth.nextSibling;
                }
                mainContainer.insertBefore(fragment, h2SectHealth.nextSibling);
            }
            if (input.length === 0) {
                mainContainer.innerHTML = ""; // clean the container
                generateHealthSection();
            }
            break;
        case "science":
            let sectStrSectScience = o.section;
            let dateSectScience = new Date(o.published_date);
            const divCardSectScience = document.createElement("div");
            divCardSectScience.classList.add("card", "mb-5");
            const divCardBodySectScience = document.createElement("div");
            divCardBodySectScience.classList.add("card-body");
            const aSectScience = document.createElement("a");
            aSectScience.classList.add("linkNewsCard");
            const aTitleSectScience = document.createElement("h5");
            aTitleSectScience.classList.add("card-title", "customCardTitleNews");
            aTitleSectScience.innerHTML += o.title;
            aSectScience.appendChild(aTitleSectScience);
            const pAbstractSectScience = document.createElement("p");
            pAbstractSectScience.classList.add("card-text");
            pAbstractSectScience.innerHTML += o.abstract;
            const pSectionScience = document.createElement("p");
            pSectionScience.classList.add("text-body-secondary");
            pSectionScience.innerHTML += `Section: ${sectStrSectScience.charAt(0).toUpperCase() + sectStrSectScience.slice(1)}`;
            const pBylineSectScience = document.createElement("p");
            pBylineSectScience.classList.add("text-body-secondary");
            pBylineSectScience.innerHTML += o.byline;
            const pUpdatedSectScience = document.createElement("p");
            pUpdatedSectScience.classList.add("text-body-secondary");
            pUpdatedSectScience.innerHTML += `Last update: ${dateSectScience.toLocaleDateString()}`;
            const imageSectScience = document.createElement("img");
            imageSectScience.classList.add("card-img-bottom");
            imageSectScience.setAttribute("src", o.multimedia);
            imageSectScience.setAttribute("alt", o.title);
            aSectScience.classList.add("url");
            aSectScience.setAttribute("target", "_blank");
            aSectScience.setAttribute("rel", "noopener noreferrer");
            aSectScience.setAttribute("href", o.url);
            divCardBodySectScience.appendChild(aSectScience);
            divCardBodySectScience.appendChild(pAbstractSectScience);
            divCardBodySectScience.appendChild(pSectionScience);
            divCardBodySectScience.appendChild(pBylineSectScience);
            divCardBodySectScience.appendChild(pUpdatedSectScience);
            divCardSectScience.appendChild(divCardBodySectScience);
            divCardSectScience.appendChild(imageSectScience);
            fragment.appendChild(divCardSectScience);
            const h2SectScience = mainContainer.querySelector("h2");
            // remove all child elements after element h2
            if (h2SectScience) {
                let nextSibling = h2SectScience.nextSibling;
                while (nextSibling) {
                    mainContainer.removeChild(nextSibling);
                    nextSibling = h2SectScience.nextSibling;
                }
                mainContainer.insertBefore(fragment, h2SectScience.nextSibling);
            }
            if (input.length === 0) {
                mainContainer.innerHTML = ""; // clean the container
                generateScienceSection();
            }
            break;
        case "magazine":
            let sectStrSectMagazine = o.section;
            let dateSectMagazine = new Date(o.published_date);
            const divCardSectMagazine = document.createElement("div");
            divCardSectMagazine.classList.add("card", "mt-4", "mb-4");
            divCardSectMagazine.style.maxWidth = "1080px";
            const divRow = document.createElement("div");
            divRow.classList.add("row", "g-0");
            const divColFirst = document.createElement("div");
            divColFirst.classList.add("col-md-4");
            const imageSectMagazine = document.createElement("img");
            imageSectMagazine.classList.add("img-fluid", "rounded-start");
            imageSectMagazine.style.height = "100%";
            imageSectMagazine.setAttribute("src", o.multimedia);
            imageSectMagazine.setAttribute("alt", o.title);
            divColFirst.appendChild(imageSectMagazine);
            divRow.appendChild(divColFirst);
            const divColSecond = document.createElement("div");
            divColSecond.classList.add("col-md-8");
            const divCardBodySectMagazine = document.createElement("div");
            divCardBodySectMagazine.classList.add("card-body");
            const pBylineSectMagazine = document.createElement("p");
            pBylineSectMagazine.innerHTML += o.byline;
            pBylineSectMagazine.classList.add("card-text");
            divCardBodySectMagazine.appendChild(pBylineSectMagazine);
            const aSectMagazine = document.createElement("a");
            aSectMagazine.classList.add("linkNewsCard");
            aSectMagazine.setAttribute("href", o.url);
            aSectMagazine.setAttribute("target", "_blank");
            aSectMagazine.setAttribute("rel", "noopener noreferrer");
            const h5TitleCard = document.createElement("h5");
            h5TitleCard.classList.add("card-title", "customCardTitleNews");
            h5TitleCard.innerHTML += o.title;
            aSectMagazine.appendChild(h5TitleCard);
            divCardBodySectMagazine.appendChild(aSectMagazine);
            const pAbstractSectMagazine = document.createElement("p");
            pAbstractSectMagazine.classList.add("card-text");
            pAbstractSectMagazine.innerHTML += o.abstract;
            divCardBodySectMagazine.appendChild(pAbstractSectMagazine);
            const pSectionMagazine = document.createElement("p");
            pSectionMagazine.classList.add("card-text");
            pSectionMagazine.innerText += `Section: ${sectStrSectMagazine.charAt(0).toUpperCase() +
                sectStrSectMagazine.slice(1)}`;
            divCardBodySectMagazine.appendChild(pSectionMagazine);
            const pUpdatedSectMagazine = document.createElement("p");
            pUpdatedSectMagazine.classList.add("card-text");
            const textSmall = document.createElement("small");
            textSmall.classList.add("text-body-secondary");
            textSmall.innerHTML += `Last update: ${dateSectMagazine.toLocaleDateString()}`;
            pUpdatedSectMagazine.appendChild(textSmall);
            divCardBodySectMagazine.appendChild(pUpdatedSectMagazine);
            divColSecond.appendChild(divCardBodySectMagazine);
            divRow.appendChild(divColSecond);
            divCardSectMagazine.appendChild(divRow);
            fragment.appendChild(divCardSectMagazine);
            const h2SectMagazine = mainContainer.querySelector("h2");
            // remove all child elements after element h2
            if (h2SectMagazine) {
                let nextSibling = h2SectMagazine.nextSibling;
                while (nextSibling) {
                    mainContainer.removeChild(nextSibling);
                    nextSibling = h2SectMagazine.nextSibling;
                }
                mainContainer.insertBefore(fragment, h2SectMagazine.nextSibling);
            }
            if (input.length === 0) {
                mainContainer.innerHTML = ""; // clean the container
                generateMagazineSection();
            }
            break;
        default:
            break;
    }
}
export { titleSectionHome };
export { titleSectionNews };
export { titleSectionHealth };
export { titleSectionScience };
export { titleSectionMagazine };
