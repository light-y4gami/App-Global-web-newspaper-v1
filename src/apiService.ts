const key: string = "erp9AAIUarA6zjHsKVi64Q5ZNEdUQGGb"; // your key

export interface NewsPreview {
  image: string;
  title: string;
  byline: string;
  abstract: string;
  source: string;
  tag: any[];
  published_date: string;
  type: string;
  updated: string;
  url: string;
  section: string;
}

export interface NewsArticle extends NewsPreview {
  section: string;
  geo_facet: string;
}

export interface NewsHealth {
  abstract: string;
  title: string;
  byline: string;
  des_facet: any[];
  geo_facet: any[];
  multimedia: any[];
  section: string;
  published_date: string;
  url: string;
}

export interface NewsScience {
  abstract: string;
  byline: string;
  title: string;
  section: string;
  multimedia: any[];
  published_date: string;
  url: string;
  org_facet: any[];
}

export interface NewsMagazine {
  abstract: string;
  byline: string;
  title: string;
  section: string;
  multimedia: any[];
  published_date: string;
  url: string;
  des_facet: any[];
  org_facet: any[];
  per_facet: any[];
  geo_facet: any[];
}

// promises that will wait for responseNews, responseNewsArticle, responseHealth, responseScience, and responseMagazine to complete
let objNews: NewsPreview[] = [];
let responseNewsPromise: Promise<void> | null = null; 

let objNewsArticle: NewsArticle[] = [];
let responseNewsArticlePromise: Promise<void> | null = null;

let objNewsHealth: NewsHealth[] = [];
let responseNewsHealthPromise: Promise<void> | null = null;

let objNewsScience: NewsScience[] = [];
let responseNewsSciencePromise: Promise<void> | null = null;

let objNewsMagazine: NewsMagazine[] = [];
let responseNewsMagazinePromise: Promise<void> | null = null;


export async function responseNews() {
  if (responseNewsPromise) {
    return responseNewsPromise;
  }

  responseNewsPromise = new Promise<void>(async (resolve, reject) => {
    try {
      const url: string = `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${key}`;
      const response = await fetch(url);
      const data = await response.json();

      data.results.forEach((result: any) => {
        // verify that the value of the properties is not null or ""
        if (
          result.media &&
          result.media[0] &&
          result.media[0]["media-metadata"] &&
          result.title &&
          result.byline &&
          result.abstract &&
          result.source &&
          result.des_facet &&
          result.published_date &&
          result.type &&
          result.updated &&
          result.section &&
          result.url
        ) {
          const news: NewsPreview = {
            image: result.media[0]["media-metadata"][2]?.url || "",
            title: result.title,
            byline: result.byline,
            abstract: result.abstract,
            source: result.source,
            tag: result.des_facet.slice(0, 4),
            published_date: result.published_date,
            type: result.type,
            updated: result.updated,
            section: result.section,
            url: result.url,
          };

          objNews.push(news);
        }
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return responseNewsPromise;
}

export async function responseNewsArticle() {
  if (responseNewsArticlePromise) {
    return responseNewsArticlePromise;
  }

  responseNewsArticlePromise = new Promise<void>(async (resolve, reject) => {
    try {
      const url: string = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`;
      const response = await fetch(url);
      const data = await response.json();

      data.results.forEach((result: any) => {
        // verify that the value of the properties is not null or ""
        if (
          result.media &&
          result.media[0] &&
          result.media[0]["media-metadata"] &&
          result.title &&
          result.byline &&
          result.abstract &&
          result.source &&
          result.des_facet &&
          result.published_date &&
          result.type &&
          result.updated &&
          result.url
        ) {
          const newsArticle: NewsArticle = {
            image: result.media[0]["media-metadata"][2]?.url || "",
            title: result.title,
            byline: result.byline,
            abstract: result.abstract,
            source: result.source,
            tag: result.des_facet.slice(0, 4),
            published_date: result.published_date,
            type: result.type,
            updated: result.updated,
            url: result.url,
            section: result.section,
            geo_facet: result.geo_facet[0],
          };

          objNewsArticle.push(newsArticle);
        }
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return responseNewsArticlePromise;
}

export async function responseNewsHealth() {
  if (responseNewsHealthPromise) {
    return responseNewsHealthPromise;
  }

  responseNewsHealthPromise = new Promise<void>(async (resolve, reject) => {
    try {
      const url: string = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${key}`;
      const response = await fetch(url);
      const data = await response.json();

      data.results.forEach((result: any) => {
        // verify that the value of the properties is not null or ""
        if (
          result.title &&
          result.byline &&
          result.abstract &&
          result.published_date &&
          result.url &&
          result.des_facet &&
          result.geo_facet &&
          result.multimedia &&
          result.per_facet &&
          result.section
        ) {
          const newsHealth: NewsHealth = {
            title: result.title,
            byline: result.byline,
            abstract: result.abstract,
            published_date: result.published_date,
            url: result.url,
            section: result.section,
            geo_facet: result.geo_facet[0],
            multimedia: result.multimedia[1].url,
            des_facet: result.des_facet[0]
          };
          objNewsHealth.push(newsHealth);
        }
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return responseNewsHealthPromise;
}

export async function responseNewsScience() {
  if (responseNewsSciencePromise) {
    return responseNewsSciencePromise;
  }

  responseNewsSciencePromise = new Promise<void>(async (resolve, reject) => {
    try {
      const url: string = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`;
      const response = await fetch(url);
      const data = await response.json();
  
      data.results.forEach((result: any) => {
        // verify that the value of the properties is not null or ""
        if (
          result.title &&
          result.byline &&
          result.abstract &&
          result.published_date &&
          result.url &&
          result.multimedia &&
          result.org_facet &&
          result.section
        ) {
          const newsScience: NewsScience = {
            title: result.title,
            byline: result.byline,
            abstract: result.abstract,
            published_date: result.published_date,
            url: result.url,
            section: result.section,
            multimedia: result.multimedia[1].url,
            org_facet: result.org_facet[0]
          };
          objNewsScience.push(newsScience);
        }
      });
      
      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return responseNewsSciencePromise;
}

export async function responseNewsMagazine() {
  if (responseNewsMagazinePromise) {
    return responseNewsMagazinePromise;
  }

  responseNewsMagazinePromise = new Promise<void>(async (resolve, reject) => {
    try {
      const url: string = `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${key}`;
      const response = await fetch(url);
      const data = await response.json();
  
      data.results.forEach((result: any) => {
        // verify that the value of the properties is not null or ""
        if (
          result.title &&
          result.byline &&
          result.abstract &&
          result.published_date &&
          result.url &&
          result.des_facet &&
          result.geo_facet &&
          result.multimedia &&
          result.per_facet &&
          result.section &&
          result.org_facet
        ) {
          const newsMagazine: NewsMagazine = {
            title: result.title,
            byline: result.byline,
            abstract: result.abstract,
            published_date: result.published_date,
            url: result.url,
            section: result.section,
            geo_facet: result.geo_facet[0],
            multimedia: result.multimedia[1].url,
            per_facet: result.per_facet,
            des_facet: result.des_facet[0],
            org_facet: result.org_facet,
          };
          objNewsMagazine.push(newsMagazine);
        }
      });
  
      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return responseNewsMagazinePromise;
}

export { objNews };
export { objNewsArticle };
export { objNewsHealth };
export { objNewsScience };
export { objNewsMagazine };
