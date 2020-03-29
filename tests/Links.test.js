import {fixUpScrolling, addTagToLinks} from '../js/modules/Links.js';

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
    describe("addTagToLinks: ", () => {
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
        test("should return links with href attributes containing '#lokalizacja'", () => {

            addTagToLinks()

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
    })
});
