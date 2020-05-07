import {fixUpScrolling, addTagToURLs} from '../js/modules/Links.js';

describe("Links module: ", () => {
    describe("fixUpScrolling: ", () => {
        beforeEach(() => {
            document.body.innerHTML = 
            `<div class="gora_strony">
                <a></a>
            </div>`;
        })
        test("should check if <a> has an attribute '#gora_strony'", () => {

            fixUpScrolling();

            expect(document.getElementsByTagName("a")[0].getAttribute("href"))
            .toBe("#gora_strony");
        });
        test("should check if <div> has an id 'gora_strony'", () => {

            fixUpScrolling();

            expect(document.getElementsByClassName("gora_strony")[0].id)
            .toBe("gora_strony");
        });
    });
    describe("addTagToURLs: ", () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <div id="lokalizacja">
                    <a href="http://127.0.0.1:5500/" title="Proszę kliknąć, aby przejść do artykułu: Article">
                        text
                    </a>
                </div>
                <div id="TRESC">
                    <a href="http://127.0.0.1:5500/" title="Proszę kliknąć, aby przejść do artykułu: Article">
                        text
                    </a>
                </div>
                <ol id="content">
                    <li>
                        <a href="http://127.0.0.1:5500/" title="Proszę kliknąć, aby przejść do artykułu: Article">
                            strona główna
                        </a>
                    </li>
                </ol>
            `
        });
        test("should return URLs with href attributes containing '#lokalizacja'", () => {

            addTagToURLs()

            expect(document.body.innerHTML).toBe(`
                <div id="lokalizacja">
                    <a href="http://127.0.0.1:5500/#lokalizacja" title="Proszę kliknąć, aby przejść do artykułu: Article">
                        text
                    </a>
                </div>
                <div id="TRESC">
                    <a href="http://127.0.0.1:5500/#lokalizacja" title="Proszę kliknąć, aby przejść do artykułu: Article">
                        text
                    </a>
                </div>
                <ol id="content">
                    <li>
                        <a href="http://127.0.0.1:5500/#lokalizacja" title="Proszę kliknąć, aby przejść do artykułu: Article">
                            strona główna
                        </a>
                    </li>
                </ol>
            `);
        });
        test("should return empty string if none of needed html element exists", () => {

            clearDOM();
            
            addTagToURLs();
            
            expect(document.body.innerHTML).toBe('');

        })
        test("should return false if <a> elements have not title attributes", () => {

            removeTitles();

            addTagToURLs();

            expect(document.querySelector("#TRESC a").href.includes("#lokalizacja")).toBeFalsy();
        });
        test("should return false if <a> elements have not ids attributes", () => {

            removeIds();

            addTagToURLs();

            expect(document.querySelector("a").href.includes("#lokalizacja")).toBeFalsy();
        });
        function clearDOM() {
            document.body.innerHTML = "";
        }

        function removeTitles() {
            const aHTMLElementsCollection = document.querySelectorAll("a");
            aHTMLElementsCollection.forEach(aElement => {
                aElement.removeAttribute("title");
            })
        }

        function removeIds() {
            const aHTMLElementsCollection = document.querySelectorAll("div");
            aHTMLElementsCollection.forEach(divElement => {
                divElement.removeAttribute("id");
            })
        }
    })
});
