const links = {
    fixUpScrolling() {
        const upReturnElement = document.getElementsByClassName("gora_strony")[0];
        const upReturnLink = upReturnElement.childNodes[0];
        upReturnElement.id = "gora_strony";
        upReturnLink.setAttribute("href", "#gora_strony");
    }

}

export default links;