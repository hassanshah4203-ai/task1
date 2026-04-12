

fetch("../navbar/nav.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    // load navbar css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../navbar/nav.css";
    document.head.appendChild(link);

    // load navbar js
    const script = document.createElement("script");
    script.src = "../navbar/nav.js";
    document.body.appendChild(script);
});

fetch("../hero/hero.html")
.then(res => res.text())
.then(data => {
    document.getElementById("hero").innerHTML = data;

    // load hero css
    const linkHeroCss = document.createElement("link");
    linkHeroCss.rel = "stylesheet";
    linkHeroCss.href = "../hero/hero.css";
    document.head.appendChild(linkHeroCss);

    // load hero js
    const scriptHeroJs = document.createElement("script");
    scriptHeroJs.src = "../hero/hero.js";
    document.body.appendChild(scriptHeroJs);
});

fetch("../footer/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;

    const linkFooterCss = document.createElement("link");
    linkFooterCss.rel = "stylesheet";
    linkFooterCss.href = "../footer/footer.css";
    document.head.appendChild(linkFooterCss);

    const scriptFooterJs = document.createElement("script");
    scriptFooterJs.src = "../footer/footer.js";
    document.body.appendChild(scriptFooterJs);
});