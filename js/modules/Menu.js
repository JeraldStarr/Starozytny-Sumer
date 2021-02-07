import {data} from '../data/data.js';
import performance from './Performance.js';

var menu = {
    menuIDElement: document.getElementById("MENU"),
    setMenu() {
        var ulElement = document.createElement("ul");
        ulElement.classList.add("nav");
        // first level declaration
        for (let i in data.menu) {
            let liElement = document.createElement("li");
            let urlElement = document.createElement("a");
            setList(liElement, ulElement);
            setURL(urlElement, data.menu[i].url, liElement, data.menu[i].name);
            performance.createExtendingMark(urlElement, i, data.menu[i].extand);
            //second level declaration
            if (data.menu[i].extand) {
                var ulElement1 = document.createElement("ul");
                ulElement1.classList.add("podmenu");
                for (let j in data.menu[i].extandContent) {
                    let liElement1 = document.createElement("li");
                    let urlElement1 = document.createElement("a");
                    setList(liElement1, ulElement1);
                    setURL(urlElement1, data.menu[i].extandContent[j].url, liElement1, data.menu[i].extandContent[j].name);

                    // adding CSS classes to <li></li> second level

                    switch (liElement1.innerText) {
                        case data.menu[3].extandContent[0].name:
                            liElement1.classList.add("gliptyka");
                            break;
                        case data.menu[3].extandContent[2].name:
                            liElement1.classList.add("plaskorzezba");
                            break;
                        case data.menu[4].extandContent[0].name:
                            liElement1.classList.add("swiatynie");
                            break;
                        case data.menu[6].extandContent[0].name:
                            liElement1.classList.add("krolowie");
                            break;
                        case data.menu[6].extandContent[7].name:
                            liElement1.classList.add("okrNowosum");
                            break;
                        default:
                    };

                    performance.createExtendingMark(urlElement1, j, data.menu[i].extandContent[j].extand);
                    //third level declaration
                    if (data.menu[i].extandContent[j].extand) {
                        let ulElement2 = document.createElement("ul");
                        ulElement2.classList.add("blok");
                        for (var k in data.menu[i].extandContent[j].extandContent) {
                            let liElement2 = document.createElement("li");
                            let urlElement2 = document.createElement("a");
                            setList(liElement2, ulElement2);
                            setURL(urlElement2, data.menu[i].extandContent[j].extandContent[k].url, liElement2, data.menu[i].extandContent[j].extandContent[k].name);

                            // adding CSS classes to <li></li> second level

                            switch (liElement2.innerText) {
                                case data.menu[3].extandContent[0].extandContent[5].name:
                                    liElement2.classList.add("pieczecie");
                                    break;
                                case data.menu[6].extandContent[7].extandContent[0].name:
                                    liElement2.classList.add("urIII");
                            }

                            performance.createExtendingMark(urlElement2, j, data.menu[i].extandContent[j].extandContent[k].extand);

                            buildFourthLevel(i, j, liElement2, data);
                        }
                        liElement1.appendChild(ulElement2); // submitting third level
                    }
                }
                liElement.appendChild(ulElement1); // submitting second level
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

        function buildFourthLevel(i, j, thirdLevelElementItem) {
            const thirdLevelArticlesWithExtention = data.menu[i].extandContent[j].extandContent[k];

            if (thirdLevelArticlesWithExtention.extand) {
                const fourthLevelList = document.createElement("ul");
                for (let x in thirdLevelArticlesWithExtention.extandContent) {
                    const fourthLevelElement = document.createElement("li");
                    const foruthLevelElementLink = document.createElement("a");
                    setList(fourthLevelElement, fourthLevelList);
                    setURL(foruthLevelElementLink, thirdLevelArticlesWithExtention.extandContent[x].url, fourthLevelElement, thirdLevelArticlesWithExtention.extandContent[x].name);
                }
                addClassToThirdLevelElementsWithExtention(thirdLevelElementItem, fourthLevelList);
            }
        }

        function addClassToThirdLevelElementsWithExtention(element, fourthLevelMenu) {
            const cylinderSealsArticleName = data.menu[3].extandContent[0].extandContent[5].name;
            const urIIIArticleName = data.menu[6].extandContent[7].extandContent[0].name;
            element.appendChild(fourthLevelMenu);

            if (fourthLevelMenu.parentNode.innerText.includes(cylinderSealsArticleName)) {
                fourthLevelMenu.classList.add("odciski");
            } else if (fourthLevelMenu.parentNode.innerText.includes(urIIIArticleName)) {
                fourthLevelMenu.classList.add("urIIIpodzial");
            }
        }

        this.menuIDElement.appendChild(ulElement);

    }
};

export default menu;