const scrolls = {
    goToSection() {
        $(".strukturaArtykulu a").click(function () {
            const section = `[data-section=${$(this).attr("class")}]`;
            $("body, html").animate({
                scrollTop: $(section).offset().top
            })
        })
    },
    goToUp() {
        $(".gora_strony a").click(function () {
            $("body, html").animate({
                scrollTop: $("#lokalizacja").offset().top
            })
        })
    }
};


export default scrolls;