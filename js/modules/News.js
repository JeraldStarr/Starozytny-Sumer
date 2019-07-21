import { dates, texts, urls, titles, iconsURLs, alt } from '../data/data.js';
import menu from './Menu.js';

const news = {
    displayBlock(startsFrom, endsOn) {
        const TITLE = "Proszę kliknąć, aby przejść do artykułu";
        for (let i = startsFrom; i <= endsOn; i++) {
            const date = document.createElement("em");
            const articleTile = document.createElement("div");
            const shortDescription = document.createElement("div");
            const link = document.createElement("a");
            const articleTitle = link;
            const imgIconLink = link;
            const clickMoreLink = document.createElement("a");
            const icon = document.createElement("img");

            const buildLink = aHTML => {
                aHTML.setAttribute("href", urls[i]);
                aHTML.setAttribute("title", TITLE);
                if (articleTitle) {
                    aHTML.textContent = titles[i];
                };
            };

            const buildIcon = htmlElement => {
                htmlElement.setAttribute("style", "height: 70; width: 167");
                htmlElement.setAttribute("src", iconsURLs[i]);
                htmlElement.setAttribute("alt", alt[i]);
            }

            const buildShortDescription = textContainer => {
                textContainer.setAttribute("class", "czcionka_co_nowego");
                textContainer.textContent = texts[i];
                return textContainer;
            }

            const buildArticleTiles = element => {
                element.setAttribute("class", "co_nowego");
                element.appendChild(articleTitle);
                element.appendChild(imgIconLink);
                element.appendChild(buildShortDescription(shortDescription));
                return element;
            }

            date.innerText = dates[i];
            menu.menuIDElement.appendChild(date);
            menu.menuIDElement.appendChild(buildArticleTiles(articleTile));

            buildLink(articleTitle);
            buildLink(imgIconLink);
            buildIcon(icon);
            imgIconLink.appendChild(icon);

            buildLink(clickMoreLink);
            clickMoreLink.textContent = "więcej>>";

            shortDescription.appendChild(clickMoreLink);
        }
    }
}

export default news;