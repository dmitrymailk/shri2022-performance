const renderPromise = new Promise(resolve => {
  document.addEventListener("DOMContentLoaded", () => {
    (async () => {
      const compressed_blob = await fetch(
        "data:application/octet-stream;base64,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"
      ).then((r) => r.blob());
  
      const format = "gzip";
      const decompressor = new DecompressionStream(format);
      const decompression_stream = compressed_blob
        .stream()
        .pipeThrough(decompressor);
      const decompressed_blob = await new Response(decompression_stream).blob();
      const decompressed = await decompressed_blob.text();
      document.body.innerHTML = decompressed;
      resolve()
    })();
  });
})



function bind(nodes, event, handler) {
    Array.from(nodes).forEach(node => {
        node.addEventListener(event, handler);
    });
}

function makeTabs(node) {
    let selected = node.querySelector('.section__tab_active').dataset.id;
    const tabs = node.querySelectorAll('.section__tab');
    const list = Array.from(tabs).map(node => node.dataset.id);
    const select = node.querySelector('.section__select');

    function selectTab(newId) {
        const newTab = node.querySelector(`.section__tab[data-id=${newId}]`);
        const newPanel = node.querySelector(`.section__panel[data-id=${newId}]`);
        const oldTab = node.querySelector('.section__tab_active');
        const oldPanel = node.querySelector('.section__panel:not(.section__panel_hidden)');

        selected = newId;

        oldTab.classList.remove('section__tab_active');
        oldTab.setAttribute('aria-selected', 'false');
        oldTab.removeAttribute('tabindex');
        newTab.classList.add('section__tab_active');
        newTab.setAttribute('aria-selected', 'true');
        newTab.setAttribute('tabindex', '0');
        newTab.focus({
            preventScroll: true
        });

        oldPanel.classList.add('section__panel_hidden');
        oldPanel.setAttribute('aria-hidden', 'true');
        newPanel.classList.remove('section__panel_hidden');
        newPanel.setAttribute('aria-hidden', 'false');

        select.value = newId;
    }

    select.addEventListener('input', () => {
        selectTab(select.value);
    });

    bind(tabs, 'click', event => {
        const newId = event.target.dataset.id;
        selectTab(newId);
    });

    bind(tabs, 'keydown', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }

        let index = list.indexOf(selected);
        if (event.which === 37) {
            // left
            --index;
        } else if (event.which === 39) {
            // right
            ++index;
        } else if (event.which === 36) {
            // home
            index = 0;
        } else if (event.which === 35) {
            // end
            index = list.length - 1;
        } else {
            return;
        }

        if (index >= list.length) {
            index = 0;
        } else if (index < 0) {
            index = list.length - 1;
        }

        selectTab(list[index]);
        event.preventDefault();
    });
}

function makeMenu(node) {
    let expanded = false;
    const links = document.querySelector('.header__links');

    node.addEventListener('click', () => {
        expanded = !expanded;
        node.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        node.querySelector('.header__menu-text').textContent = expanded ? 'Закрыть меню' : 'Открыть меню';
        links.classList.toggle('header__links_opened', expanded);
        links.classList.add('header__links-toggled');
    });
}

// document.addEventListener('DOMContentLoaded', () => {
// });
renderPromise.then(() => {
  makeTabs(document.querySelector('.main__devices'));
  makeMenu(document.querySelector('.header__menu'));

})