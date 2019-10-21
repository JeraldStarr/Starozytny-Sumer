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
        span.innerText = document.querySelector("h1").innerText;
        return span;
    },
    buildWaterMarkContainers() {
        const waterMarkContainers = [];
        const beforeWaterMarkContainer = document.createElement("div");
        const afterWaterMarkContainer = document.createElement("div");
        beforeWaterMarkContainer.classList.add("waterMarkTitle");
        afterWaterMarkContainer.classList.add("waterMarkTitle");
        waterMarkContainers.push(beforeWaterMarkContainer, afterWaterMarkContainer);
        // waterMarkContainers.push(afterWaterMarkContainer);
        return waterMarkContainers;
    }

}

export default structure;