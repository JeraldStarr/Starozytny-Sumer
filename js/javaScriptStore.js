var performance = function() {
        function showHeader() {
            var header = ["Starożytny Sumer", "Strona o cywilizacji Sumerów", "ok. 3750-2004 p.n.e."];
            for (i = 0; i < 3; i++) {
                var node = document.createElement("span");
                document.getElementById("NAGLOWEK").appendChild(node), node.innerHTML = header[i]
            }
        }

        function insertHamburger() {
            var div = document.createElement("div"),
                header = document.getElementById("NAGLOWEK"),
                span = document.querySelector("span");
                div.className = "hamburger";
                header.insertBefore(div, span);
        }

        function toggleMenu() {
            var hamburger = document.getElementsByClassName("hamburger")[0],
                menu = document.getElementById("MENU"),
                flag = !0;
            hamburger.onclick = function() {
                flag ? (menu.style.display = "block", flag = false) : (menu.style.display = "none", flag = true)
            }
        }

        function displayBigImg() {
            $(document).ready(function() {
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
        }

        function galleryService() {
            $(document).ready(function() {
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
        }

		function displayAnotherWebsiteLabel() {
		    $(document).ready(function() {
		        $(".etykieta").hide();
		        $(".wyzwalacz").mouseover(function() {
		            var poziomaWspolrzedna,
		                pionowaWspolrzedna,
		                $this = $(this),
		                $data_tooltip = $($this.attr("data-tooltip")),
		                pozycjaWyzwalacza = $this.offset(),
		                wyzwalaczWys = $this.outerHeight(),
		                wyzwalaczSzer = $this.outerWidth(),
		                etykietaWys = $data_tooltip.outerHeight(),
		                etykietaSzer = $data_tooltip.outerWidth(),
		                oknoSzer = $(window).width(),
		                przewiniete = $(document).scrollTop();
		            if (pozycjaWyzwalacza.top - etykietaWys - przewiniete > 0) {
		                pionowaWspolrzedna = pozycjaWyzwalacza.top - etykietaWys - 10;
		            } // if
		            else {
		                pionowaWspolrzedna = pozycjaWyzwalacza.top + wyzwalaczWys + 10;
		            } // else

		            var wystajePoza = (pozycjaWyzwalacza.left + etykietaSzer) - oknoSzer;
		            if (wystajePoza > 0) {
		                poziomaWspolrzedna = pozycjaWyzwalacza.left - wystajePoza - 10;
		            } // if
		            else {
		                poziomaWspolrzedna = pozycjaWyzwalacza.left;
		            }

		            $data_tooltip.css({
		                left: poziomaWspolrzedna,
		                top: pionowaWspolrzedna,
		                position: "absolute"
		            }).fadeIn(200);
		        }); // koniec mouseover 
		        $(".wyzwalacz").mouseout(function() {
		            $(".etykieta").fadeOut(200);
		        });
		    }); // koniec ready 
		}
        function createExtendingMark(link, li, n, a, newClass) {
            if (li && n && a && newClass) {
                for (var i = 0; i < n.length; i++)
                    if (link.innerText === navArticles[n[i]][0][a[i]]) {
                        li.setAttribute("class", newClass[i]);
                        var div = document.createElement("div");
                        var mark = document.createTextNode(">");
                        div.appendChild(mark), div.setAttribute("class", "menuArrow"), link.appendChild(div)
                    }
            } else {
                var div = document.createElement("div");
                var mark = document.createTextNode(">");
                div.setAttribute("class", "menuArrow"), div.appendChild(mark), link.appendChild(div)
            }
        }
        return {
            showHeader: showHeader,
            insertHamburger: insertHamburger,
            toggleMenu: toggleMenu,
            displayBigImg: displayBigImg,
            galleryService: galleryService,
            displayAnotherWebsiteLabel: displayAnotherWebsiteLabel,
            createExtendingMark: createExtendingMark
        }
    }();
var aside = function() {
        function displaySideBar() {
            function e() {
                function e(e) {
                    var ul = document.createElement("ul");
                    for (performance.createExtendingMark(i), r.appendChild(ul), k = 0; k < navArticles[e][0].length; k++) {
                        var li = document.createElement("li");
                        var link = document.createElement("a");
                        ul.setAttribute("class", "podmenu"), ul.appendChild(li), li.appendChild(link), link.innerHTML = navArticles[e][0][k], link.setAttribute("href", navArticles[e][1][k]);
                        var l = [6, 3, 3, 4, 6];
                        var c = [0, 0, 2, 0, 7];
                        var newClass = ["krolowie", "gliptyka", "plaskorzezba", "swiatynie", "okrNowosum"];
                        performance.createExtendingMark(link, li, l, c, newClass)
                    }
                }
                var n = document.createElement("ul");
                n.setAttribute("class", "nav");
                for (var a = 0; a < navArticles[0][0].length; a++) {
                    var r = document.createElement("li"),
                        i = document.createElement("a");
                    i.setAttribute("href", navArticles[0][1][a]);
                    var l = document.createTextNode(navArticles[0][0][a]);
                    for (i.appendChild(l), r.appendChild(i), n.appendChild(r), j = 1; j < 9; j++) i.innerHTML === navArticles[0][0][j] && e(j)
                }
                menuIDElement.appendChild(n), menu.createThirdLevel(), menu.createFourthLevel()
            }

            function n(e, n) {
                var a = document.createElement("img");
                a.setAttribute("class", "bocznyDingir"), a.setAttribute("src", e), a.setAttribute("alt", n), menuIDElement.appendChild(a)
            }

            function a(e) {
                var n = document.createElement("span");
                menuIDElement.appendChild(n), n.innerHTML = e
            }
            e(), n("/grafika/zdjecia/dingir/dingir_przezroczysty_wersja2.gif", "Skrzydlaty dysk symbolizował sumeryjskich bogów"), a("Co nowego"), news.displayBlocks(0, 3), a("Ostatnio aktualizowane"), news.displayBlocks(4, 7), a("Najczęściej odwiedzane"), news.displayBlocks(8, 8), n("/grafika/zdjecia/dingir/dingir_przezroczysty_wersja2.gif", "Skrzydlaty dysk symbolizował sumeryjskich bogów")
        }
        var menuIDElement = document.getElementById("MENU");
        return {
            displaySideBar: displaySideBar,
            menuIDElement: menuIDElement
        }
    }();
var google = function() {
        function displaySearch() {
            var e = "007341217864062862490:oev_bc2l-fs",
                t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cse.google.com/cse.js?cx=" + e;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n);
        }
        return {
            displaySearch: displaySearch
        }
    }();
var menu = function() {
        function e() {
            var e = document.getElementsByClassName("gliptyka")[0];
            var t = document.createElement("ul");
            t.setAttribute("class", "blok"), console.log("sztuka zdobnicz: " + e), e.appendChild(t);
            for (var n = 0; n < navArticles[9][0].length; n++) {
                var a = document.createElement("li"),
                    r = document.createElement("a");
                if (r.setAttribute("href", navArticles[9][1][n]), r.innerHTML = navArticles[9][0][n], r.innerHTML === navArticles[9][0][5]) {
                    a.setAttribute("class", "pieczecie");
                    var i = document.createElement("div"),
                        l = document.createTextNode(">");
                    i.appendChild(l), i.setAttribute("class", "menuArrow"), r.appendChild(i)
                }
                a.appendChild(r), t.appendChild(a)
            }
            var c = document.getElementsByClassName("plaskorzezba")[0],
                o = document.createElement("ul");
            o.setAttribute("class", "blok"), c.appendChild(o);
            for (var n = 0; n < navArticles[10][0].length; n++) {
                var s = document.createElement("li"),
                    d = document.createElement("a");
                d.setAttribute("href", navArticles[10][1][n]), d.innerHTML = navArticles[10][0][n], s.appendChild(d), o.appendChild(s)
            }
            var u = document.getElementsByClassName("swiatynie")[0],
                m = document.createElement("ul");
            m.setAttribute("class", "blok"), u.appendChild(m);
            for (var n = 0; n < navArticles[11][0].length; n++) {
                var p = document.createElement("li"),
                    v = document.createElement("a");
                v.setAttribute("href", navArticles[11][1][n]), v.innerHTML = navArticles[11][0][n], p.appendChild(v), m.appendChild(p)
            }
            var h = document.getElementsByClassName("okrNowosum")[0],
                f = document.createElement("ul");
            f.setAttribute("class", "blok"), h.appendChild(f);
            for (var n = 0; n < navArticles[12][0].length; n++) {
                var A = document.createElement("li"),
                    y = document.createElement("a");
                if (y.setAttribute("href", navArticles[12][1][n]), y.innerHTML = navArticles[12][0][n], A.appendChild(y), f.appendChild(A), y.innerHTML === navArticles[12][0][0]) {
                    A.setAttribute("class", "urIII");
                    var i = document.createElement("div"),
                        g = document.createTextNode(">");
                    i.appendChild(g), i.setAttribute("class", "menuArrow"), y.appendChild(i)
                }
            }
            var b = document.getElementsByClassName("krolowie")[0],
                E = document.createElement("ul");
            E.setAttribute("class", "blok"), b.appendChild(E);
            for (var n = 0; n < navArticles[13][0].length; n++) {
                var C = document.createElement("li"),
                    k = document.createElement("a");
                k.setAttribute("href", navArticles[13][1][n]), k.innerHTML = navArticles[13][0][n], C.appendChild(k), E.appendChild(C)
            }
        }

        function createFourthLevel() {
                var pieczecie = document.getElementsByClassName("pieczecie")[0];
                var ulElement = document.createElement("ul");
                for (ulElement.setAttribute("class", "odciski"), pieczecie.appendChild(ulElement), i = 0; i < navArticles[14][0].length; i++) {
                    console.log(i);
                    var link = document.createElement("a");
                    var li = document.createElement("li");
                    link.setAttribute("href", navArticles[14][1][i]); 
                    link.innerText = navArticles[14][0][i];
                    li.appendChild(link);
                    ulElement.appendChild(li);
                }

                var urIII = document.getElementsByClassName("urIII")[0];
                var ul = document.createElement("ul");
                for (ul.setAttribute("class", "urIIIpodzial"), urIII.appendChild(ul), b = 0; b < navArticles[15][0].length; b++) {
                    var liElem = document.createElement("li");
                    var linkElem = document.createElement("a");
                    linkElem.setAttribute("href", navArticles[15][1][b]);
                    linkElem.innerText = navArticles[15][0][b];
                    liElem.appendChild(linkElem);
                    ul.appendChild(liElem);
                }
            }
        return {
            createThirdLevel: e,
            createFourthLevel: createFourthLevel
        }
    }();
var news = function() {
        function displayBlocks(startsFrom, endsOn) {
            const TITLE = "Proszę kliknąć, aby przejść do artykułu";
            for (var i = startsFrom; i <= endsOn; i++) {
                var emElement = document.createElement("em");
                    emElement.innerHTML = dates[i]; 
                    aside.menuIDElement.appendChild(emElement);
                var divElement = document.createElement("div");
                    divElement.setAttribute("class", "co_nowego");
                    aside.menuIDElement.appendChild(divElement);
                var link = document.createElement("a");
                var aElementFirst = link;
                    aElementFirst.setAttribute("href", urls[i]); 
                    aElementFirst.setAttribute("title", TITLE); 
                    aElementFirst.innerHTML = titles[i];
                var aElementSecond = link;
                    aElementSecond.setAttribute("href", urls[i]);
                    aElementSecond.setAttribute("title", TITLE);
                    divElement.appendChild(aElementFirst);
                    divElement.appendChild(aElementSecond);
                var imgElement = document.createElement("img");
                    imgElement.setAttribute("style", "height: 70; width: 167");
                    imgElement.setAttribute("src", iconsURLs[i]);
                    imgElement.setAttribute("alt", alt[i]);
                    aElementSecond.appendChild(imgElement);
                var divElement2 = document.createElement("div");
                    divElement2.setAttribute("class", "czcionka_co_nowego");
                    divElement2.innerHTML = texts[i];
                    divElement.appendChild(divElement2);
                var aElementThird = document.createElement("a");
                    aElementThird.setAttribute("href", urls[i]);
                    aElementThird.setAttribute("title", TITLE);
                    aElementThird.innerHTML = "więcej>>";
                    divElement2.appendChild(aElementThird);
            }
        }
        return {
            displayBlocks: displayBlocks
        }
    }();