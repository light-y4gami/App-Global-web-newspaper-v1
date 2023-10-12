var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const key = "erp9AAIUarA6zjHsKVi64Q5ZNEdUQGGb"; // your key
// promises that will wait for responseNews, responseNewsArticle, responseHealth, responseScience, and responseMagazine to complete
let objNews = [];
let responseNewsPromise = null;
let objNewsArticle = [];
let responseNewsArticlePromise = null;
let objNewsHealth = [];
let responseNewsHealthPromise = null;
let objNewsScience = [];
let responseNewsSciencePromise = null;
let objNewsMagazine = [];
let responseNewsMagazinePromise = null;
export function responseNews() {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseNewsPromise) {
            return responseNewsPromise;
        }
        responseNewsPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${key}`;
                const response = yield fetch(url);
                const data = yield response.json();
                data.results.forEach((result) => {
                    var _a;
                    // verify that the value of the properties is not null or ""
                    if (result.media &&
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
                        result.url) {
                        const news = {
                            image: ((_a = result.media[0]["media-metadata"][2]) === null || _a === void 0 ? void 0 : _a.url) || "",
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
            }
            catch (error) {
                reject(error);
            }
        }));
        return responseNewsPromise;
    });
}
export function responseNewsArticle() {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseNewsArticlePromise) {
            return responseNewsArticlePromise;
        }
        responseNewsArticlePromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`;
                const response = yield fetch(url);
                const data = yield response.json();
                data.results.forEach((result) => {
                    var _a;
                    // verify that the value of the properties is not null or ""
                    if (result.media &&
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
                        result.url) {
                        const newsArticle = {
                            image: ((_a = result.media[0]["media-metadata"][2]) === null || _a === void 0 ? void 0 : _a.url) || "",
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
            }
            catch (error) {
                reject(error);
            }
        }));
        return responseNewsArticlePromise;
    });
}
export function responseNewsHealth() {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseNewsHealthPromise) {
            return responseNewsHealthPromise;
        }
        responseNewsHealthPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${key}`;
                const response = yield fetch(url);
                const data = yield response.json();
                data.results.forEach((result) => {
                    // verify that the value of the properties is not null or ""
                    if (result.title &&
                        result.byline &&
                        result.abstract &&
                        result.published_date &&
                        result.url &&
                        result.des_facet &&
                        result.geo_facet &&
                        result.multimedia &&
                        result.per_facet &&
                        result.section) {
                        const newsHealth = {
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
            }
            catch (error) {
                reject(error);
            }
        }));
        return responseNewsHealthPromise;
    });
}
export function responseNewsScience() {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseNewsSciencePromise) {
            return responseNewsSciencePromise;
        }
        responseNewsSciencePromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`;
                const response = yield fetch(url);
                const data = yield response.json();
                data.results.forEach((result) => {
                    // verify that the value of the properties is not null or ""
                    if (result.title &&
                        result.byline &&
                        result.abstract &&
                        result.published_date &&
                        result.url &&
                        result.multimedia &&
                        result.org_facet &&
                        result.section) {
                        const newsScience = {
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
            }
            catch (error) {
                reject(error);
            }
        }));
        return responseNewsSciencePromise;
    });
}
export function responseNewsMagazine() {
    return __awaiter(this, void 0, void 0, function* () {
        if (responseNewsMagazinePromise) {
            return responseNewsMagazinePromise;
        }
        responseNewsMagazinePromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${key}`;
                const response = yield fetch(url);
                const data = yield response.json();
                data.results.forEach((result) => {
                    // verify that the value of the properties is not null or ""
                    if (result.title &&
                        result.byline &&
                        result.abstract &&
                        result.published_date &&
                        result.url &&
                        result.des_facet &&
                        result.geo_facet &&
                        result.multimedia &&
                        result.per_facet &&
                        result.section &&
                        result.org_facet) {
                        const newsMagazine = {
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
            }
            catch (error) {
                reject(error);
            }
        }));
        return responseNewsMagazinePromise;
    });
}
export { objNews };
export { objNewsArticle };
export { objNewsHealth };
export { objNewsScience };
export { objNewsMagazine };
