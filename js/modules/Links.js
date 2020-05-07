function fixUpScrolling() {
    const tagText = "gora_strony";
    const upReturnElement = document.getElementsByClassName(tagText)[0];
    const upReturnLink = upReturnElement.children[0];
    upReturnElement.id = tagText;
    upReturnLink.setAttribute("href", `#${tagText}`);
};
function addTagToURLs() {
    const ids = ["TRESC", "lokalizacja", "content"];
    ids.forEach(id => {
        _addTagToURLsInSection(id);
    });
};
function _addTagToURLsInSection(selector) {
    if (!document.getElementById(selector)) {
        return null;
    }
    const section = document.getElementById(selector);
    const linksCollection = section.getElementsByTagName("a");
    for (var i = 0; i < linksCollection.length; i++) { 
        if (selector === "TRESC") {
            if (linksCollection[i].title) {
                _addTagToLink(linksCollection, i);
            };
        } else if (selector === "lokalizacja" || selector === "content") {
            _addTagToLink(linksCollection, i);
        }
    };
};
function _addTagToLink(linksCollection, i) {     
    linksCollection[i].setAttribute("href", `${linksCollection[i]
        .href}#lokalizacja`);   
};

export {fixUpScrolling, addTagToURLs};