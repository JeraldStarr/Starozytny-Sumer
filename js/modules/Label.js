const label = {
    create() {
        const container = document.createElement("div");
        const label = document.createElement("div");
        const spanHTMLTag1 = document.createElement("span");
        const spanHTMLTag2 = document.createElement("span");
        const strongHTMLTag = document.createElement("strong");
        const icon = document.createElement("img");

        icon.setAttribute("src", "grafika/zdjecia/starozytnaAsyria.jpg");
        spanHTMLTag1.textContent = "Artykuł znajduje się w zewnętrznym serwisie:";
        spanHTMLTag2.textContent = "Kliknięcie spowoduje otwarcie nowej karty";
        strongHTMLTag.textContent = "Starożytna Asyria";
        label.id = "labelTextContainer";
        label.appendChild(spanHTMLTag1);
        label.appendChild(strongHTMLTag);
        label.appendChild(spanHTMLTag2);
        container.appendChild(label);
        container.appendChild(icon);
        container.id = "starozytnaAsyria";
        container.classList.add("etykieta");
        document.body.appendChild(container);
    },
    displayAnotherWebsiteLabel() {
        $(".etykieta").hide();
        $(".wyzwalacz").mouseover(function () {
            var poziomaWspolrzedna,
                pionowaWspolrzedna,
                $this = $(this),
                $data_tooltip = $($this.attr("data-tooltip")),
                pozycjaWyzwalacza = $this.offset(),
                wyzwalaczWys = $this.outerHeight(),
                etykietaWys = $data_tooltip.outerHeight(),
                etykietaSzer = $data_tooltip.outerWidth(),
                oknoSzer = $(window).width(),
                przewiniete = $(document).scrollTop();
            if (pozycjaWyzwalacza.top - etykietaWys - przewiniete > 0) {
                pionowaWspolrzedna = pozycjaWyzwalacza.top - etykietaWys - 10;
            }
            else {
                pionowaWspolrzedna = pozycjaWyzwalacza.top + wyzwalaczWys + 10;
            }
            var wystajePoza = (pozycjaWyzwalacza.left + etykietaSzer) - oknoSzer;
            if (wystajePoza > 0) {
                poziomaWspolrzedna = pozycjaWyzwalacza.left - wystajePoza - 10;
            }
            else {
                poziomaWspolrzedna = pozycjaWyzwalacza.left;
            }
            $data_tooltip.css({
                left: poziomaWspolrzedna,
                top: pionowaWspolrzedna,
                position: "absolute"
            }).fadeIn(200);
        });
        $(".wyzwalacz").mouseout(function () {
            $(".etykieta").fadeOut(200);
        });
}
}

export default label;