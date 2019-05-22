import {data} from '../data/data.js';
import performance from './Performance.js';

var menu = function () {
    var menuIDElement = document.getElementById("MENU");

    function setMenu() {
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

                            //fourth level declaration
                            if (data.menu[i].extandContent[j].extandContent[k].extand) {
                                let ulElement3 = document.createElement("ul");
                                for (var x in data.menu[i].extandContent[j].extandContent[k].extandContent) {
                                    let liElement3 = document.createElement("li");
                                    let urlElement3 = document.createElement("a");
                                    setList(liElement3, ulElement3 /*data.menu[i].extandContent[j].extandContent[k].extandContent[x].name*/);
                                    setList(liElement3, ulElement3);
                                    setURL(urlElement3, data.menu[i].extandContent[j].extandContent[k].extandContent[x].url, liElement3, data.menu[i].extandContent[j].extandContent[k].extandContent[x].name);
                                }
                                liElement2.appendChild(ulElement3);

                                // internet explore implementation

                                if (navigator.userAgent.indexOf("Trident") > -1) {
                                    console.log(ulElement3.parentNode.innerText);
                                    if (ulElement3.parentNode.innerText.indexOf(data.menu[3].extandContent[0].extandContent[5].name) > -1) {

                                        ulElement3.className = "odciski";
                                    } else if (ulElement3.parentNode.innerText.indexOf(data.menu[6].extandContent[7].extandContent[0].name) > -1) {
                                        ulElement3.className = "urIIIpodzial";
                                    }

                                } // different browser 
                                else {

                                    if (ulElement3.parentNode.innerText.includes(data.menu[3].extandContent[0].extandContent[5].name)) {
                                        ulElement3.classList.add("odciski");
                                    } else if (ulElement3.parentNode.innerText.includes(data.menu[6].extandContent[7].extandContent[0].name)) {
                                        ulElement3.classList.add("urIIIpodzial");
                                    }

                                }

                            }
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
            anchor.setAttribute("href", url);
            anchor.innerText = innerText;
            liParent.appendChild(anchor);
        };
        menuIDElement.appendChild(ulElement);

    };
    return {
        menuIDElement: menuIDElement,
        setMenu: setMenu
    }
}();

export default menu;