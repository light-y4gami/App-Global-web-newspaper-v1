import {
  objNews,
  objNewsArticle,
  objNewsHealth,
  objNewsScience,
  objNewsMagazine,
} from "./apiService.js";

import {
  titleSectionHome,
  titleSectionNews,
  titleSectionHealth,
  titleSectionScience,
  titleSectionMagazine,
  renderMatchingObject,
} from "./htmlGenerator.js";

export const input = document.getElementById("input") as HTMLInputElement;
const suggestionsList = document.getElementById(
  "suggestions-list"
) as HTMLDataListElement;

// news headlines
const titlesHome: any[] = [];
const titlesNews: any[] = [];
const titlesHealth: any = [];
const titlesScience: any = [];
const titlesMagazine: any = [];

export function loadDataHome() {
  titlesHome.length = 0; // clean the array before adding titles
  titleSectionHome.forEach((titleHome) => {
    titlesHome.push(titleHome);
  });
}

export function cleanInputHome() {
  input.value = "";
}

let refSection: string = ""; // save reference to current section

// save the titles according to the section
export function loadDataSection(section: string) {
  input.value = "";
  switch (section) {
    case "news":
      refSection = "news";
      titlesNews.length = 0;
      titleSectionNews.forEach((newsArticle) => {
        titlesNews.push(newsArticle);
      });
      break;

    case "health":
      refSection = "health";
      titlesHealth.length = 0;
      titleSectionHealth.forEach((newsHealth) => {
        titlesHealth.push(newsHealth);
      });
      break;

    case "science":
      refSection = "science";
      titlesScience.length = 0;
      titleSectionScience.forEach((newsScience) => {
        titlesScience.push(newsScience);
      });
      break;

    case "magazine":
      refSection = "magazine";
      titlesMagazine.length = 0; // clean the array before adding titles
      titleSectionMagazine.forEach((newsMagazine) => {
        titlesMagazine.push(newsMagazine);
      });
      break;

    case "home":
      refSection = "home";
      loadDataHome();
      break;

    default:
      break;
  }
}

export function search() {
  input.addEventListener("input", (event) => {
    const inputText = (event.target as HTMLInputElement).value; // convert the event target to an input element (such as an HTMLInputElement) and then access the value property

    const filteredResult = findMatches(inputText, refSection);
  });
}

function findMatches(input: string, refSect: string) {
  let query: string = input.replace(/\b\w/g, (match) => match.toUpperCase()); // converts the first letter of each word entered into the input to uppercase to match the data
  let matchingSentences: any = [];
  let matchingObjects: any = [];

  // search in the appropriate section
  switch (refSect) {
    case "news":
      matchingSentences = searchInSentences(titlesNews, query);
      matchingObjects = searchInObjects(objNewsArticle, query, "news");
      displaySuggestions(titlesNews, query);
      break;
    case "health":
      matchingSentences = searchInSentences(titlesHealth, query);
      matchingObjects = searchInObjects(objNewsHealth, query, "health");
      displaySuggestions(titlesHealth, query);
      break;
    case "science":
      matchingSentences = searchInSentences(titlesScience, query);
      matchingObjects = searchInObjects(objNewsScience, query, "science");
      displaySuggestions(titlesScience, query);
      break;
    case "magazine":
      matchingSentences = searchInSentences(titlesMagazine, query);
      matchingObjects = searchInObjects(objNewsMagazine, query, "magazine");
      displaySuggestions(titlesMagazine, query);
      break;

    default:
      matchingSentences = searchInSentences(titlesHome, query);
      matchingObjects = searchInObjects(objNews, query, "home");
      displaySuggestions(titlesHome, query);
      break;
  }
}

// search for matches in an array
function searchInSentences(data: any[], query: string) {
  let results = []; // store matching words

  for (let i = 0; i < data.length; i++) {
    // divide the sentence into words
    let words = data[i].split(" ");

    // checks if any words match the search string
    for (let j = 0; j < words.length; j++) {
      if (words[j].includes(query)) {
        results.push(data[i]);
        break; // no need to continue searching in this sentence
      }
    }
  }
  return results; // returns sentences for which matches were found
}

// find the object where the matching title was found
function searchInObjects(objContent: any, query: string, sect: string) {
  for (let i = 0; i < objContent.length; i++) {
    let obj = JSON.stringify(objContent[i].title);
    if (obj.includes(query)) {
      parserObj(JSON.stringify(objContent[i]), sect); // send the object to render
      break;
    }
  }
}

function displaySuggestions(titles: any[], query: string) {
  suggestionsList.innerHTML = "";
  let valueOption;

  // filter matches based on user input
  const matchingSuggestions = titles.filter((title) => title.includes(query));

  // add suggestions to datalist
  matchingSuggestions.forEach((suggestion) => {
    const option = document.createElement("option");
    option.value = suggestion;
    valueOption = option;
    suggestionsList.appendChild(valueOption); // previous option parameter
  });
}

function parserObj(matchingObj: any, sect: string) {
  let jParseObj = JSON.parse(matchingObj); // convert JSON back to ts object

  renderMatchingObject(jParseObj, sect, input.value);
}
