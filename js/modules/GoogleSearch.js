const googleSearch = {
    displaySearch() {
        var e = "007341217864062862490:oev_bc2l-fs",
            t = document.createElement("script");
        t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cse.google.com/cse.js?cx=" + e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n);
    }
};

export default googleSearch;