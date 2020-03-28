const links = {
    fixUpScrolling() {
        const tagText = "gora_strony";
        const upReturnElement = document.getElementsByClassName(tagText)[0];
        const upReturnLink = upReturnElement.children[0];
        upReturnElement.id = tagText;
        upReturnLink.setAttribute("href", `#${tagText}`);
    },
    addTagToLinks() {
        this._addTagToLinksInSection("TRESC");
        this._addTagToLinksInSection("lokalizacja");
        this._addTagToLinksInSection("content");
    },
    _addTagToLinksInSection(selector) {
        if (!document.getElementById(selector)) {
            return null;
        }
        const section = document.getElementById(selector);
        const linksCollection = section.getElementsByTagName("a");
        const validLinksCollection = [];
        for (var i = 0; i < linksCollection.length; i++) { 
            if (selector === "TRESC") {
                if (linksCollection[i].title
                    .includes("Proszę kliknąć, aby przejść do artykułu:")) {
                    this._addTagToLink(linksCollection, i, validLinksCollection);
                };
            } else if (selector === "lokalizacja" || selector === "content") {
                this._addTagToLink(linksCollection, i, validLinksCollection);
            }
        };
    },
    _addTagToLink(linksCollection, i, validLinksCollection) {     
        linksCollection[i].setAttribute("href", `${linksCollection[i]
            .href}#lokalizacja`);
        validLinksCollection.push(linksCollection[i]);    
    },
}

export default links;