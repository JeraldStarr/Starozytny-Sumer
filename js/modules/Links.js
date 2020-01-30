const links = {
    fixUpScrolling() {
        const tagText = "gora_strony";
        const upReturnElement = document.getElementsByClassName(tagText)[0];
        const upReturnLink = upReturnElement.childNodes[0];
        upReturnElement.id = tagText;
        upReturnLink.setAttribute("href", `#${tagText}`);
    },
    addTagToLinks() {
        this.addTagToLinksInSection("TRESC");
        this.addTagToLinksInSection("lokalizacja");
    },
    addTagToLinksInSection(selector) {
        const section = document.getElementById(selector);
        const linksCollection = section.getElementsByTagName("a");
        const validLinksCollection = [];
        for (var i = 0; i < linksCollection.length; i++) {  
            this.addTagToLink(linksCollection, i, validLinksCollection);
        };
    },
    addTagToLink(linksCollection, i, validLinksCollection) {     
        linksCollection[i].setAttribute("href", `${linksCollection[i]
            .href}#lokalizacja`);
        validLinksCollection.push(linksCollection[i]);    
    }
}

export default links;