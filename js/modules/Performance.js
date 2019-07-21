// import menu from './Menu.js';
const performance = {
    showHeader() {
        var header = ["Starożytny Sumer", "Strona o cywilizacji Sumerów", "ok. 3750-2004 p.n.e."];
        for (let i = 0; i < 3; i++) {
            var node = document.createElement("span");
            document.getElementById("NAGLOWEK").appendChild(node), node.innerHTML = header[i]
        }
    },
    insertHamburger() {
        var div = document.createElement("div"),
            header = document.getElementById("NAGLOWEK"),
            span = document.querySelector("span");
        div.className = "hamburger";
        header.insertBefore(div, span);
    },
    /*
     * Odpowiada za wyświetlanie lub ukrywanie poza krawędzią viewportu 
       menu po kliknięciu/dotknięciu
     */

    toggleMenu() {
        var hamburger = document.getElementsByClassName("hamburger")[0],
            menu = document.getElementById("MENU");
        hamburger.addEventListener("click", function () {
            if (menu.style.left === "-80%" || menu.style.left === "") {
                menu.style.left = "4%";
                hamburger.classList.add("hamburgerClicked");
            } else if (menu.style.left === "4%") {
                menu.style.left = "-80%";
                hamburger.classList.remove("hamburgerClicked");
            }

        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                menu.style.left = "-20px;"
            } else if (window.innerWidth <= 768 && menu.style.left === "-20px") {
                menu.style.left = "4%";
            }
        }, false)

    },
    // clean third level menu
    thirdLevelMobileMenuCleaner() {
        const ulBlokClass = document.querySelectorAll(".blok");
        for (let i = 0; i < ulBlokClass.length; i++) {
            if (ulBlokClass[i].id === "display") {
                ulBlokClass[i].id = "";
                ulBlokClass[i].parentNode.childNodes[0].childNodes[1].classList.remove("upSideDown")
            };
        }
    },
    // Transforms desktop menu in mobile menu
    transformToMobileMenu() {
        if (window.innerWidth < 770) {
            const arrows = document.querySelectorAll(".menuArrow");
            for (let i = 0; i < arrows.length; i++) {
                // moving apart mobile menu in order to display submentu
                arrows[i].addEventListener("click", function (event) {
                    event.preventDefault();
                    const ulUnderArrow = arrows[i].parentNode.parentNode.childNodes[1];
                    if (ulUnderArrow.id == "display") {
                        ulUnderArrow.id = "";
                        arrows[i].classList.remove("upSideDown");
                        // cleans third level menu
                        thirdLevelMobileMenuCleaner();
                    } else {
                        ulUnderArrow.id = "display";
                        arrows[i].classList.add("upSideDown");
                    }
                });
            }
        }
    },
    // displays big version of the picture after clicking in small one
    displayBigImg() {
        $(document).ready(function () {
            $("figure a").fancybox({
                overlayColor: "#877973",
                overlayOpacity: .8,
                transitionIn: "elastic",
                transitionOut: "elastic",
                easingIn: "easeInSine",
                easingOut: "easeOutSine",
                titlePosition: "inside",
                cyclic: true
            })
        })
    },
    // displays picture in gallery
    galleryService() {
        $(document).ready(function () {
            $("#galeria a").fancybox({
                overlayColor: "#D12424",
                overlayOpacity: ".9",
                padding: 10,
                changeSpeed: 900,
                transitionIn: "fade",
                transitionOut: "fade",
                easingIn: "easeInSine",
                essingOut: "easeOutSine",
                titlePosition: "outside",
                cyclic: !0
            })
        })
    },
    // creates ">" mark if menu element has submenu
    createExtendingMark(url, i, level) {
        if (level) {
            let divElement = document.createElement("div");
            divElement.classList.add("menuArrow");
            divElement.innerText = ">";
            url.appendChild(divElement);
        }
    },
    under319px() {
        let paragraphElement = document.createElement("p");

        function showMessage() {
            if (window.innerWidth < 319) {
                paragraphElement.innerText = "Ta strona nie jest obsługiwana w rozdzielczości niższej niż 319 pikseli szerokości wyświetlacza. Proszę o użycie urządzenia z szerszym ekranem.";
                document.body.appendChild(paragraphElement);
            }
        }
        showMessage();

        window.addEventListener("resize", function () {
            showMessage();
        }, false);
    }
};

export default performance;