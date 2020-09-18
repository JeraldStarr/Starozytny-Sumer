import {validateInputBox, handleSubmit, validateInputBoxSetter, handleSubmitSetter, initForm} from '../js/modules/Validation.js';

describe("Validation module: ", () => {
    beforeEach(() => {
        document.body.innerHTML = `<form action="/php/mail.php" method="post" id="form">
        <div id="wrong"> </div>
        <p>
            <label>Twój e-mail: 
                <input type="text" class="email required" id="e-mail" name="email" size="29">
            </label>
        </p>
        <p>
            <label>Temat: 
                <input type="text" class="subject required" id="subject" name="subject" size="29">
            </label>
        </p>
        <p>
            <label>Zadaj pytanie: 
                <textarea rows="10" class="textarea required" name="text">
                </textarea>
            </label>
        </p>
        <input type="submit" class="button" value="Wyślij">
        <input type="reset" value="Wyczyść">
        </form>
    </form>`;
    });
    afterEach(() => {
        document.body.innerHTML = "";
    })
    describe("initForm: ", () => {
        beforeEach(() => {
            document.body.innerHTML = "";
        });
        afterEach(() => {
            document.body.innerHTML = "";
        });
        test("should return null if form was not collected", () => {
            expect(initForm()).toBeNull();
        });
    });
    describe('validateInputBox: ', () => {
        let e;
        beforeAll(() => {
            e = {
                preventDefault: jest.fn().mockName('preventDefaultMock'),
            }
        })

        test("checks if 'preventDefault' function has been called when input box is not valid", () => {
            const inputBox = {
                value: "",
                classList: ['email']
            }

            validateInputBox(e, inputBox);
            expect(e.preventDefault).toHaveBeenCalled();
        })
        test("checks if html element with id 'wrong' has a comment inside, when input box is not valid", () => {
            const inputBox = {
                value: "",
                classList: ['email']
            }

            validateInputBox(e, inputBox);
            expect(document.getElementById("wrong").innerText).toBeTruthy();
        })
        test("checks if html element with id 'wrong' is empty when e-mail is valid", () => {
            const inputBox = {
                value: "myEmail@onet.pl",
                classList: ['e-mail']
            }

            validateInputBox(e, inputBox);
            expect(document.getElementById("wrong").innerText).toBeFalsy();
        })
        test("checks if html element with id 'wrong' displays error when e-mail is not valid", () => {
            const inputBox = {
                value: "myEmailonet.pl",
                classList: ['e-mail']
            }

            validateInputBox(e, inputBox);
            expect(document.getElementById("wrong").innerText).toBeTruthy();
        })
        test("checks if 'validateEmailInputBox' returns true when e-mail is valid", () => {

        });
    })
    describe('handleSubmit: ', () => {
        let e;
        let validateInputBoxFunction;
        let validateInputBoxMock;
        beforeAll(() => {
            e = {
                preventDefault: jest.fn().mockName('preventDefaultMock'),
            }
            validateInputBoxFunction = validateInputBox;
            validateInputBoxMock = jest.fn().mockName('validateInputBoxMock');
            validateInputBoxSetter(validateInputBoxMock);
        })
        afterAll(()=> {
            validateInputBoxSetter(validateInputBoxFunction);
        });
        test('checks if mocked "validateInputBox" has been called', () => {
            handleSubmit(e)
            expect(validateInputBoxMock).toHaveBeenCalled();
        })
    })
})