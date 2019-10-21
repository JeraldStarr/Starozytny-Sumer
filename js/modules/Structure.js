const structure = {
    insertSectionToHeader() {
        const header = document.getElementById("NAGLOWEK");
        const section = document.createElement("section");
        const span = document.createElement("span");
        const beforeWaterMarkContainer = document.createElement("div");
        const afterWaterMarkContainer = document.createElement("div");
        beforeWaterMarkContainer.classList.add("waterMarkTitle");
        afterWaterMarkContainer.classList.add("waterMarkTitle");
        span.classList.add("sectionTitle");
        header.appendChild(section);
        section.appendChild(beforeWaterMarkContainer);
        section.appendChild(span);
        section.appendChild(afterWaterMarkContainer);
        span.innerText = document.querySelector("h1").innerText;

    }
}

export default structure;