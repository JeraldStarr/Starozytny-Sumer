    function fixUpScrolling() {
        const tagText = "gora_strony";
        const upReturnElement = document.getElementsByClassName(tagText)[0];
        const upReturnLink = upReturnElement.children[0];
        upReturnElement.id = tagText;
        upReturnLink.setAttribute("href", `#${tagText}`);
    };
    function addTagToLinks() {
        _addTagToLinksInSection("TRESC");
        _addTagToLinksInSection("lokalizacja");
        _addTagToLinksInSection("content");
    }
    function _addTagToLinksInSection(selector) {
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
                    _addTagToLink(linksCollection, i, validLinksCollection);
                };
            } else if (selector === "lokalizacja" || selector === "content") {
                _addTagToLink(linksCollection, i, validLinksCollection);
            }
        };
    }
    function _addTagToLink(linksCollection, i, validLinksCollection) {     
        linksCollection[i].setAttribute("href", `${linksCollection[i]
            .href}#lokalizacja`);
        validLinksCollection.push(linksCollection[i]);    
    }


export {fixUpScrolling, addTagToLinks};