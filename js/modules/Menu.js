import {data} from '../data/data.js';
import performance from './Performance.js';

var menu = {
    config: {
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

    },
    menuIDElement: document.getElementById("MENU"),
    setMenu() {
        this.buildLevel(this.menuIDElement);

    },
    buildLevel(parent, indexParam = 0) {
        const menuLevelList = document.createElement("ul");
        menuLevelList.classList.add("nav");
        // first level declaration
        const jsonLevel = data.menu;
        for (let i in jsonLevel) {
            let menuListParent = document.createElement("li");
            let link = document.createElement("a");
            this.setList(menuListParent, menuLevelList);
            this.setURL(link, jsonLevel[i].url, menuListParent, jsonLevel[i].name);
            performance.createExtendingMark(link, i, jsonLevel[i].extandContent);
            //second level declaration
            this.buildSecondLevel(i, menuListParent);
        }

        parent.appendChild(menuLevelList);
    },
    buildSecondLevel(i, liElement) {
        console.log(i);
        const firstLevelArticle = data.menu[i].extand;
        const level = this.config.secondLevel;
        if (firstLevelArticle) {
            // console.log(data.menu[i]);
            const secondLevelList = document.createElement("ul");
            secondLevelList.classList.add("podmenu");
            for (let j in data.menu[i].extandContent) {
                let secondLevelElement = document.createElement("li");
                let secondLevelElementLink = document.createElement("a");
                this.setList(secondLevelElement, secondLevelList);
                this.setURL(secondLevelElementLink, data.menu[i].extandContent[j].url, secondLevelElement, data.menu[i].extandContent[j].name);

                // adding CSS classes to <li></li> second level

                this.addClassToExtendingElement(secondLevelElement, level);

                performance.createExtendingMark(secondLevelElementLink, j, data.menu[i].extandContent[j].extand);

                this.buildThirdLevel(secondLevelElement, i, j);
            }
            liElement.appendChild(secondLevelList); // submitting second level
        }
    },
    buildThirdLevel(secondLevelElementItem, i, j) {
        const secondLevelArticles = data.menu[i].extandContent[j];
        const level = this.config.thirdLevel;
        if (secondLevelArticles.extand) {
            let thirdLevelList = document.createElement("ul");
            thirdLevelList.classList.add("blok");
            for (var k in data.menu[i].extandContent[j].extandContent) {
                let thirdLevelElement = document.createElement("li");
                let thirdLevelElementLink = document.createElement("a");
                this.setList(thirdLevelElement, thirdLevelList);
                this.setURL(thirdLevelElementLink, data.menu[i].extandContent[j].extandContent[k].url, thirdLevelElement, data.menu[i].extandContent[j].extandContent[k].name);

                this.addClassToExtendingElement(thirdLevelElement, level);

                performance.createExtendingMark(thirdLevelElementLink, j, data.menu[i].extandContent[j].extandContent[k].extand);

                this.buildFourthLevel(thirdLevelElement, i, j, k);
            }
            secondLevelElementItem.appendChild(thirdLevelList); // submitting third level
        }
    },
    buildFourthLevel(thirdLevelElementItem, i, j, k) {
        const thirdLevelArticles = data.menu[i].extandContent[j].extandContent[k];

        if (thirdLevelArticles.extand) {
            const fourthLevelList = document.createElement("ul");
            fourthLevelList.classList.add("mainMenu__4thLevel");
            for (let x in thirdLevelArticles.extandContent) {
                const fourthLevelElement = document.createElement("li");
                const foruthLevelElementLink = document.createElement("a");
                this.setList(fourthLevelElement, fourthLevelList);
                this.setURL(foruthLevelElementLink, thirdLevelArticles.extandContent[x].url, fourthLevelElement, thirdLevelArticles.extandContent[x].name);
            }
            thirdLevelElementItem.appendChild(fourthLevelList);
        }
    },
    addClassToExtendingElement(thirdLevelElement, level) {
        level.forEach(element => thirdLevelElement.classList.add(element.cssClass));
    },
    /*
    * this function gives the name to the article from menu navigation
    */
    setList(li, parent) {
        // li       - takes <li></li> element, which should get a name
        // parent   - takes parent element (always <ul></ul>)
        parent.appendChild(li)
    },

    /*
    * this function set url to the menu article
    */
    setURL(anchor, url, liParent, innerText) {
        // anchor    - takes <a></a> html element
        // url       - takes url from data base
        // liParent  - takes parent element (always <li></li>)
        // innerText - takes the name of the article from data base
        anchor.setAttribute("href", `${url}#lokalizacja`);
        anchor.innerText = innerText;
        liParent.appendChild(anchor);
    }
};

export default menu;