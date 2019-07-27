import {watermark, asideHeaders} from '../data/data.js';
import menu from './Menu.js';
import news from './News.js';

const asideBar = {
    displaySideBar() {
        this.showAsideBarElements();
    },
    buildWaterMark(url, alternativeText) {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("class", "bocznyDingir");
        imgElement.setAttribute("src", url);
        imgElement.setAttribute("alt", alternativeText);
        menu.menuIDElement.appendChild(imgElement)
    },
    setHeader(text) {
        const spanElement = document.createElement("span");
        menu.menuIDElement.appendChild(spanElement);
        spanElement.innerHTML = text;
    },
    getFromVariable(index) {
        switch (index) {
            case 2: return 0;
                break;
            case 4: return 4;
                break;
            case 6: return 8;
                break;
        }
    },
    getToVariable(index) {
        switch (index) {
            case 2: return 3;
                break;
            case 4: return 7;
                break;
            case 6: return 8;
                break;
        }
    },
    getHeader(index) {
        switch (index) {
            case 1: return asideHeaders.header1;
                break;
            case 3: return asideHeaders.header2;
                break;
            case 5: return asideHeaders.header3;
                break;
        }
    },
    showAsideBarElements() {
        const asideDingir = watermark.path;
        const asideDingirAltText = watermark.alt;
        const numberOfTiles = 9;

        for (let i = 0; i < numberOfTiles - 1; i++) {
            if (i === 0 || i === 7) {
                this.addWatermark(asideDingir, asideDingirAltText);
            } else if (i === 2 || i === 4 || i === 6) {
                this.addTilesSeries(i);
            } else {
                this.addHeader(i);
            }
        }
    },
    addWatermark(asideDingir, asideDingirAltText) {
        this.buildWaterMark(asideDingir, asideDingirAltText);
    }, 
    addTilesSeries(i) {
        let from = this.getFromVariable(i);
        let to = this.getToVariable(i);
        news.displayBlock(from, to);
    },
    addHeader(i) {
        let header = this.getHeader(i);
        this.setHeader(header);
    }
};

export default asideBar;