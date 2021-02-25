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
        const isExtending = true;
        if(isExtending) {
            const extendedMenu = document.createElement("ul");
            extendedMenu.classList.add("nav");
            // first level declaration
            const jsonLevel = data.menu;
            console.log("jsonLevel: ", jsonLevel);
            for (let i in jsonLevel) {
                let parentEl = document.createElement("li");
                let link = document.createElement("a");
                this.setList(parentEl, extendedMenu);
                this.setURL(link, jsonLevel[i].url, parentEl, jsonLevel[i].name);
                performance.createExtendingMark(link, i, jsonLevel[i].extandContent);
                //second level declaration
                this.buildSecondLevel(parentEl, i);
            }
    
            parent.appendChild(extendedMenu);
        }
    },
    buildSecondLevel(parent, i) {
        const isExtending = data.menu[i].extandContent;
        if (isExtending) {
            // console.log(data.menu[i]);
            const extendedMenu = document.createElement("ul");
            extendedMenu.classList.add("podmenu");
            const jsonLevel = data.menu[i].extandContent;
            for (let j in jsonLevel) {
                let parentEl = document.createElement("li");
                let link = document.createElement("a");
                this.setList(parentEl, extendedMenu);
                this.setURL(link, jsonLevel[j].url, parentEl, jsonLevel[j].name);

                // adding CSS classes to <li></li> second level

                this.addClassToExtendingElement(parentEl);

                performance.createExtendingMark(link, j, jsonLevel[j].extand);

                this.buildThirdLevel(parentEl, i, j);
            }
            parent.appendChild(extendedMenu); // submitting second level
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

                this.addClassToExtendingElement(thirdLevelElement);

                performance.createExtendingMark(thirdLevelElementLink, j, data.menu[i].extandContent[j].extandContent[k].extand);

                this.buildFourthLevel(thirdLevelElement, i, j, k);
            }
            secondLevelElementItem.appendChild(thirdLevelList); // submitting third level
        }
    },
    addClassToExtendingElement(extElem) {
        const level = extElem.parentElement.classList.contains("podmenu") ? menu.config.secondLevel :
         menu.config.thirdLevel;
        level.forEach(item => {
            if (extElem.innerText === item.name) {
                extElem.classList.add(item.cssClass);
            }
        });
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