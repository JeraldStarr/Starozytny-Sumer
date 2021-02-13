import {data} from '../data/data.js';
import performance from './Performance.js';

var menu = {
    menuIDElement: document.getElementById("MENU"),
    setMenu() {
        const menuElement = document.createElement("ul");
        menuElement.classList.add("nav");
        // first level declaration
        for (let i in data.menu) {
            let firstLevelElement = document.createElement("li");
            let firstLevelElementLink = document.createElement("a");
            setList(firstLevelElement, menuElement);
            setURL(firstLevelElementLink, data.menu[i].url, firstLevelElement, data.menu[i].name);
            performance.createExtendingMark(firstLevelElementLink, i, data.menu[i].extand);
            //second level declaration
            buildSecondLevel(i, firstLevelElement);
        }

        function buildSecondLevel(i, liElement) {
            const firstLevelArticle = data.menu[i].extand;
            if (firstLevelArticle) {
                const secondLevelList = document.createElement("ul");
                secondLevelList.classList.add("podmenu");
                for (let j in data.menu[i].extandContent) {
                    let secondLevelElement = document.createElement("li");
                    let secondLevelElementLink = document.createElement("a");
                    setList(secondLevelElement, secondLevelList);
                    setURL(secondLevelElementLink, data.menu[i].extandContent[j].url, secondLevelElement, data.menu[i].extandContent[j].name);

                    // adding CSS classes to <li></li> second level

                    switch (secondLevelElement.innerText) {
                        case data.menu[3].extandContent[0].name:
                            secondLevelElement.classList.add("gliptyka");
                            break;
                        case data.menu[3].extandContent[2].name:
                            secondLevelElement.classList.add("plaskorzezba");
                            break;
                        case data.menu[4].extandContent[0].name:
                            secondLevelElement.classList.add("swiatynie");
                            break;
                        case data.menu[6].extandContent[0].name:
                            secondLevelElement.classList.add("krolowie");
                            break;
                        case data.menu[6].extandContent[7].name:
                            secondLevelElement.classList.add("okrNowosum");
                            break;
                        default:
                    };

                    performance.createExtendingMark(secondLevelElementLink, j, data.menu[i].extandContent[j].extand);

                    buildThirdLevel(i, j, secondLevelElement);
                }
                liElement.appendChild(secondLevelList); // submitting second level
            }
        }
        function buildThirdLevel(i, j, secondLevelElementItem) {
            const secondLevelArticles = data.menu[i].extandContent[j];
            if (secondLevelArticles.extand) {
                let thirdLevelList = document.createElement("ul");
                thirdLevelList.classList.add("blok");
                for (var k in data.menu[i].extandContent[j].extandContent) {
                    let thirdLevelElement = document.createElement("li");
                    let thirdLevelElementLink = document.createElement("a");
                    setList(thirdLevelElement, thirdLevelList);
                    setURL(thirdLevelElementLink, data.menu[i].extandContent[j].extandContent[k].url, thirdLevelElement, data.menu[i].extandContent[j].extandContent[k].name);

                    addClassToThirdLevelList(thirdLevelElement);

                    performance.createExtendingMark(thirdLevelElementLink, j, data.menu[i].extandContent[j].extandContent[k].extand);

                    buildFourthLevel(i, j, thirdLevelElement, data, k);
                }
                secondLevelElementItem.appendChild(thirdLevelList); // submitting third level
            }
        }

        function addClassToThirdLevelList(thirdLevelElement) {
            switch (thirdLevelElement.innerText) {
                case data.menu[3].extandContent[0].extandContent[5].name:
                    thirdLevelElement.classList.add("pieczecie");
                    break;
                case data.menu[6].extandContent[7].extandContent[0].name:
                    thirdLevelElement.classList.add("urIII");
            }
        }

        function buildFourthLevel(i, j, thirdLevelElementItem, data, k) {
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
        }
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

        this.menuIDElement.appendChild(menuElement);

    }
};

export default menu;