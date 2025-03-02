const renderPromise = new Promise((a) => {
  document.addEventListener("DOMContentLoaded", () => {
    (async () => {
      let b = await fetch(
          "data:application/octet-stream;base64,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"
        ).then((a) => a.blob()),
        c = new DecompressionStream("gzip"),
        d = b.stream().pipeThrough(c),
        e = await new Response(d).blob(),
        f = await e.text();
      (document.body.innerHTML = f), a();
    })();
  });
});
function bind(a, b, c) {
  Array.from(a).forEach((a) => {
    a.addEventListener(b, c);
  });
}
function makeTabs(a) {
  let d = a.querySelector(".section__tab_active").dataset.id,
    b = a.querySelectorAll(".section__tab"),
    e = Array.from(b).map((a) => a.dataset.id),
    c = a.querySelector(".section__select");
  function f(b) {
    let e = a.querySelector(`.section__tab[data-id=${b}]`),
      g = a.querySelector(`.section__panel[data-id=${b}]`),
      f = a.querySelector(".section__tab_active"),
      h = a.querySelector(".section__panel:not(.section__panel_hidden)");
    (d = b),
      f.classList.remove("section__tab_active"),
      f.setAttribute("aria-selected", "false"),
      f.removeAttribute("tabindex"),
      e.classList.add("section__tab_active"),
      e.setAttribute("aria-selected", "true"),
      e.setAttribute("tabindex", "0"),
      e.focus({ preventScroll: !0 }),
      h.classList.add("section__panel_hidden"),
      h.setAttribute("aria-hidden", "true"),
      g.classList.remove("section__panel_hidden"),
      g.setAttribute("aria-hidden", "false"),
      (c.value = b);
  }
  c.addEventListener("input", () => {
    f(c.value);
  }),
    bind(b, "click", (a) => {
      let b = a.target.dataset.id;
      f(b);
    }),
    bind(b, "keydown", (a) => {
      if (a.ctrlKey || a.metaKey || a.shiftKey || a.altKey) return;
      let b = e.indexOf(d);
      if (37 === a.which) --b;
      else if (39 === a.which) ++b;
      else if (36 === a.which) b = 0;
      else {
        if (35 !== a.which) return;
        b = e.length - 1;
      }
      b >= e.length ? (b = 0) : b < 0 && (b = e.length - 1),
        f(e[b]),
        a.preventDefault();
    });
}
function makeMenu(a) {
  let b = !1,
    c = document.querySelector(".header__links");
  a.addEventListener("click", () => {
    (b = !b),
      a.setAttribute("aria-expanded", b ? "true" : "false"),
      (a.querySelector(".header__menu-text").textContent = b
        ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"
        : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),
      c.classList.toggle("header__links_opened", b),
      c.classList.add("header__links-toggled");
  });
}
renderPromise.then(() => {
  makeTabs(document.querySelector(".main__devices")),
    makeMenu(document.querySelector(".header__menu"));
});
