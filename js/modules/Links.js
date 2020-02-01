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
<<<<<<< HEAD
        if (document.getElementById("content")) {
            this.addTagToLinksInSection("content");
        }
=======
        this.addTagToLinksInSection("contain");
>>>>>>> c9e7338f932a38073b2a5b6fc78d6753189cf5a1
    },
    addTagToLinksInSection(selector) {
        const section = document.getElementById(selector);
        const linksCollection = section.getElementsByTagName("a");
        const validLinksCollection = [];
<<<<<<< HEAD
        console.log();
=======
>>>>>>> c9e7338f932a38073b2a5b6fc78d6753189cf5a1
        for (var i = 0; i < linksCollection.length; i++) { 
            if (selector === "TRESC") {
                if (linksCollection[i].title
                    .includes("Proszę kliknąć, aby przejść do artykułu:")) {
                    this.addTagToLink(linksCollection, i, validLinksCollection);
                };
<<<<<<< HEAD
            } else if (selector === "lokalizacja" || selector === "content") {
=======
            } else if (selector === "lokalizacja" || selector === "contain") {
>>>>>>> c9e7338f932a38073b2a5b6fc78d6753189cf5a1
                this.addTagToLink(linksCollection, i, validLinksCollection);
            }
        };
    },
    addTagToLink(linksCollection, i, validLinksCollection) {     
        linksCollection[i].setAttribute("href", `${linksCollection[i]
            .href}#lokalizacja`);
        validLinksCollection.push(linksCollection[i]);    
    },
}

export default links;