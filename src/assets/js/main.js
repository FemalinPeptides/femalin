// Site-wide behaviour: mobile menu and "return to the peptide list" state.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // Profile pages: send people back to the directory exactly as they left it
  // (filters, search text and scroll position preserved).
  var saved = null;
  try { saved = JSON.parse(sessionStorage.getItem('femalin:list') || 'null'); } catch (e) {}
  document.querySelectorAll('a[data-list-link]').forEach(function (a) {
    if (saved && saved.search) a.setAttribute('href', '/peptides/' + saved.search);
    a.addEventListener('click', function () {
      try { sessionStorage.setItem('femalin:restore', '1'); } catch (e) {}
    });
  });
  // The "Return to the peptide list" buttons on profiles do the same.
  document.querySelectorAll('main a.btn[href="/peptides/"]').forEach(function (a) {
    if (!document.querySelector('.profile-meta')) return;
    if (saved && saved.search) a.setAttribute('href', '/peptides/' + saved.search);
    a.addEventListener('click', function () {
      try { sessionStorage.setItem('femalin:restore', '1'); } catch (e) {}
    });
  });
})();
