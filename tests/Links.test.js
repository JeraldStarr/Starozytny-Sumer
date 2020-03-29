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
});
