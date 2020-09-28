function initForm() {
    const form = document.getElementById("form");
    if (!form) {
        return null;
    }
    form.addEventListener('submit', handleSubmit, false);
}

function handleSubmit(e) {
    const inputBoxesCollection = document.getElementsByClassName('required');
    [...inputBoxesCollection].reverse().forEach(inputBox => {
        validateInputBox(e, inputBox);
    })
}

function validateInputBox(e, inputBox) {
   
    if(!inputBox.value) {
        document.getElementById("wrong").innerText = `Proszę uzupełnić puste pole`;
        e.preventDefault();
    } else {
        validateEmail(e, inputBox);
    }
}

function validateEmail(e, inputBox) {
    if (!inputBox.classList.contains("email")) {
        return null;
    }
    const isValid = /^\w+.{0,1}\w+@\w+.{0,1}\w{0,3}$/.test(inputBox.value);
    if (!isValid) {
        document.getElementById("wrong").innerText = "Proszę podać poprawny adres e-mail";
        e.preventDefault();
    }
}

const validateInputBoxSetter = validateInputBoxFunction => validateInputBox = validateInputBoxFunction;


export { initForm, validateInputBox, validateInputBoxSetter, handleSubmit, validateEmail };
