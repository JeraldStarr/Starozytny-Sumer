import {watermark, asideHeaders} from '../data/data.js';
import menu from './Menu.js';
import news from './News.js';

const asideBar = {
    displaySideBar() {
        const setWaterMark = (url, alternativeText) => {
            const imgElement = document.createElement("img");
            imgElement.setAttribute("class", "bocznyDingir");
            imgElement.setAttribute("src", url);
            imgElement.setAttribute("alt", alternativeText);
            menu.menuIDElement.appendChild(imgElement)
        }

        const setHeader = text => {
            const spanElement = document.createElement("span");
            menu.menuIDElement.appendChild(spanElement);
            spanElement.innerHTML = text;
        }

        const showTiles = () => {
            const asideDingir = watermark.path;
            const asideDingirAltText = watermark.alt;
            const numberOfTiles = 8;

            const getFromVariable = index => {
                switch (index) {
                    case 2: return 0;
                        break;
                    case 4: return 4;
                        break;
                    case 6: return 8;
                        break;
                }
            }

            const getToVariable = index => {
                switch (index) {
                    case 2: return 3;
                        break;
                    case 4: return 7;
                        break;
                    case 6: return 8;
                        break;
                }
            }

            const getHeader = index => {
                switch (index) {
                    case 1: return asideHeaders.header1;
                        break;
                    case 3: return asideHeaders.header2;
                        break;
                    case 5: return asideHeaders.header3;
                        break;
                }
            }

            for (let i = 0; i < numberOfTiles; i++) {
                if (i === 0 || i === 7) {
                    setWaterMark(asideDingir, asideDingirAltText);
                } else if (i === 2 || i === 4 || i === 6) {
                    let from = getFromVariable(i);
                    let to = getToVariable(i);
                    news.displayBlock(from, to);
                } else {
                    let header = getHeader(i);
                    setHeader(header);
                }
            }
        }

        showTiles();
    }
};

export default asideBar;