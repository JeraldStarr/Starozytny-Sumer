import { data } from "../data/data.js";
const structure = {
    insertSectionToHeader() {
        const header = document.getElementById("NAGLOWEK");
        const section = document.createElement("section");
        const spanHTML = this.buildSpan();
        const waterMarkContainers = this.buildWaterMarkContainers();  
        header.appendChild(section);
        section.appendChild(waterMarkContainers[0]);
        section.appendChild(spanHTML);
        section.appendChild(waterMarkContainers[1]);
        
    },
    buildSpan() {
        const span = document.createElement("span");
        span.classList.add("sectionTitle");
        span.innerText = this.getArticleName();
        return span;
    },
    buildWaterMarkContainers() {
        const waterMarkContainers = [];
        const beforeWaterMarkContainer = document.createElement("div");
        const afterWaterMarkContainer = document.createElement("div");
        beforeWaterMarkContainer.classList.add("waterMarkTitle");
        afterWaterMarkContainer.classList.add("waterMarkTitle");
        waterMarkContainers.push(beforeWaterMarkContainer, 
            afterWaterMarkContainer);
        return waterMarkContainers;
    },
    getArticleName() {
        var articleLocation = `/${location.href.split("/").slice(3).join("/")}`;
        if (articleLocation === "/inne_podstrony/kontakt.html") {
            return "Kontakt";
        } else if (articleLocation === "/sitemap.html") {
            return "Mapa strony";
        }
        for(let art in data.menu) {
            if (articleLocation === data.menu[art].url) {
                return data.menu[art].name;
            }
            if (data.menu[art].extand) {
                for (let subart in data.menu[art].extandContent) {
                    if (articleLocation === data.menu[art].extandContent[subart]
                        .url) {
                        return data.menu[art].extandContent[subart].name;
                    }
                    if (data.menu[art].extandContent[subart].extand) {
                        for (let subsubart in data.menu[art]
                            .extandContent[subart].extandContent) {
                            if (articleLocation === data.menu[art]
                                .extandContent[subart]
                                .extandContent[subsubart]
                                .url) {
                                return data.menu[art].extandContent[subart]
                                .extandContent[subsubart].name;
                            }
                            if (data.menu[art].extandContent[subart]
                                .extandContent[subsubart].extand) {
                                for (let subsubsubart in data.menu[art]
                                    .extandContent[subart]
                                    .extandContent[subsubart]
                                    .extandContent) {
                                    if (articleLocation === data.menu[art]
                                        .extandContent[subart]
                                        .extandContent[subsubart]
                                        .extandContent[subsubsubart]
                                        .url) {
                                        return data.menu[art]
                                        .extandContent[subart]
                                        .extandContent[subsubart]
                                        .extandContent[subsubsubart].name;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

export default structure;

