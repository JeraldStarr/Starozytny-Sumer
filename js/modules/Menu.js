import {data} from '../data/data.js';
import performance from './Performance.js';


const config = {
    secondLevel: [
        {name: data.menu[3].extandContent[0].name, cssClass: "gliptyka"},
        {name: data.menu[3].extandContent[2].name, cssClass: "plaskorzezba"},
        {name: data.menu[4].extandContent[0].name, cssClass: "swiatynie"},
        {name: data.menu[6].extandContent[0].name, cssClass: "krolowie"},
        {name: data.menu[6].extandContent[7].name, cssClass: "okrNowosum"}
    ],
    thirdLevel: [
        {name: data.menu[3].extandContent[0].extandContent[5].name, cssClass: "pieczecie"},
        {name: data.menu[6].extandContent[7].extandContent[0].name, cssClass: "urIII"}
    ]
};
const menuIDElement = document.getElementById("MENU");
function init() {
    buildLevel(menuIDElement, 0);

};
function buildLevel(parent, indexParam) {
    const isExtending = data.menu;
    composeElements(parent, isExtending, indexParam, "nav");
};
function buildSecondLevel(parent, indexParam) {
    const isExtending = data.menu[indexParam].extandContent;
    composeElements(parent, isExtending, indexParam, "podmenu");
};
function composeElements(parent, isExtending, indexParam, extendingElClass) {
    if (isExtending) {
        const extendedMenu = document.createElement("ul");
        extendedMenu.classList.add(extendingElClass);
        const jsonLevel = isExtending;
        for (let i in jsonLevel) {
            let parentEl = document.createElement("li");
            let link = document.createElement("a");
            setList(parentEl, extendedMenu);
            setURL(link, jsonLevel[i].url, parentEl, jsonLevel[i].name);
            if (parent.id !== "MENU") {
                addClassToExtendingElement(parentEl);
            }

            performance.createExtendingMark(link, i, jsonLevel[i].extand);
            if (parent.id === "MENU") {
                buildSecondLevel(parentEl, i);
            } else {
                buildThirdLevel(parentEl, indexParam, i);
            }
        }
        parent.appendChild(extendedMenu);
    }
};
function buildThirdLevel(secondLevelElementItem, i, j) {
    const secondLevelArticles = data.menu[i].extandContent[j];
    const level = config.thirdLevel;
    if (secondLevelArticles.extand) {
        let thirdLevelList = document.createElement("ul");
        thirdLevelList.classList.add("blok");
        for (var k in data.menu[i].extandContent[j].extandContent) {
            let thirdLevelElement = document.createElement("li");
            let thirdLevelElementLink = document.createElement("a");
            setList(thirdLevelElement, thirdLevelList);
            setURL(thirdLevelElementLink, data.menu[i].extandContent[j].extandContent[k]
                .url, thirdLevelElement, data.menu[i].extandContent[j].extandContent[k].name);

            addClassToExtendingElement(thirdLevelElement);

            performance.createExtendingMark(thirdLevelElementLink, j, data.menu[i]
                .extandContent[j].extandContent[k].extand);

            buildFourthLevel(thirdLevelElement, i, j, k);
        }
        secondLevelElementItem.appendChild(thirdLevelList); // submitting third level
    }
};
function addClassToExtendingElement(extElem) {
    const level = extElem.parentElement.classList.contains("podmenu") ? config.secondLevel :
    config.thirdLevel;
    level.forEach(item => {
        if (extElem.innerText === item.name) {
            extElem.classList.add(item.cssClass);
        }
    });
};
function buildFourthLevel(thirdLevelElementItem, i, j, k) {
    const thirdLevelArticles = data.menu[i].extandContent[j].extandContent[k];

    if (thirdLevelArticles.extand) {
        const fourthLevelList = document.createElement("ul");
        fourthLevelList.classList.add("mainMenu__4thLevel");
        for (let x in thirdLevelArticles.extandContent) {
            const fourthLevelElement = document.createElement("li");
            const foruthLevelElementLink = document.createElement("a");
            setList(fourthLevelElement, fourthLevelList);
            setURL(foruthLevelElementLink, thirdLevelArticles.extandContent[x].url, fourthLevelElement, thirdLevelArticles.extandContent[x].name);
        }
        thirdLevelElementItem.appendChild(fourthLevelList);
    }
};
/*
* this function gives the name to the article from menu navigation
*/
function setList(li, parent) {
    // li       - takes <li></li> element, which should get a name
    // parent   - takes parent element (always <ul></ul>)
    parent.appendChild(li)
};

/*
* this function set url to the menu article
*/
function setURL(anchor, url, liParent, innerText) {
    // anchor    - takes <a></a> html element
    // url       - takes url from data base
    // liParent  - takes parent element (always <li></li>)
    // innerText - takes the name of the article from data base
    anchor.setAttribute("href", `${url}#lokalizacja`);
    anchor.innerText = innerText;
    liParent.appendChild(anchor);
};

export {init, menuIDElement};