// Peptide directory: alias-aware search plus evidence-context and concern filters.
// Cards are rendered in the HTML, so the full A–Z list works without JavaScript.
(function () {
  var grid = document.getElementById('pep-grid');
  if (!grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.pep-card'));
  var input = document.getElementById('pep-q');
  var count = document.getElementById('result-count');
  var emptyName = document.getElementById('empty-name');
  var emptyOption = document.getElementById('empty-option');
  var clearBtn = document.getElementById('clear-filters');
  var labelBtns = Array.prototype.slice.call(document.querySelectorAll('[data-label]')).filter(function (b) { return b.tagName === 'BUTTON'; });
  var topicBtns = Array.prototype.slice.call(document.querySelectorAll('[data-topic]'));
  var total = cards.length;

  var norm = function (s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); };
  var state = { q: '', label: 'all', topic: '' };

  var params = new URLSearchParams(location.search);
  state.q = params.get('q') || '';
  if (/^(rx|cosmetic|other|experimental)$/.test(params.get('label') || '')) state.label = params.get('label');
  if (topicBtns.some(function (b) { return b.dataset.topic === params.get('topic'); })) state.topic = params.get('topic');
  input.value = state.q;

  function matches(card) {
    var q = norm(state.q);
    if (q && card.dataset.search.split(' ').join('|').indexOf(q) === -1) return false;
    if (state.label !== 'all' && card.dataset.label !== state.label) return false;
    if (state.topic && card.dataset.topics.split(' ').indexOf(state.topic) === -1) return false;
    return true;
  }

  function persist() {
    var p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.label !== 'all') p.set('label', state.label);
    if (state.topic) p.set('topic', state.topic);
    var search = p.toString() ? '?' + p.toString() : '';
    history.replaceState(null, '', location.pathname + search);
    try { sessionStorage.setItem('femalin:list', JSON.stringify({ search: search, y: window.scrollY })); } catch (e) {}
  }

  function render() {
    var shown = 0;
    cards.forEach(function (c) {
      var ok = matches(c);
      c.hidden = !ok;
      if (ok) shown++;
    });
    var filtered = state.q || state.label !== 'all' || state.topic;
    count.textContent = filtered
      ? 'Showing ' + shown + ' of ' + total + ' peptides'
      : 'Showing all ' + total + ' peptides, A–Z';
    emptyName.hidden = !(shown === 0 && state.q);
    emptyOption.hidden = !(shown === 0 && !state.q);
    clearBtn.hidden = !filtered;
    labelBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.label === state.label)); });
    topicBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.topic === state.topic)); });
    persist();
  }

  function reset() {
    state = { q: '', label: 'all', topic: '' };
    input.value = '';
    render();
    input.focus();
  }

  input.addEventListener('input', function () { state.q = input.value.trim(); render(); });
  labelBtns.forEach(function (b) { b.addEventListener('click', function () { state.label = b.dataset.label; render(); }); });
  topicBtns.forEach(function (b) {
    b.addEventListener('click', function () { state.topic = state.topic === b.dataset.topic ? '' : b.dataset.topic; render(); });
  });
  clearBtn.addEventListener('click', reset);
  document.querySelectorAll('[data-reset]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); reset(); });
  });

  render();

  // Returning from a profile through our own links: restore scroll position.
  try {
    if (sessionStorage.getItem('femalin:restore') === '1') {
      sessionStorage.removeItem('femalin:restore');
      var saved = JSON.parse(sessionStorage.getItem('femalin:list') || 'null');
      if (saved && saved.y) window.scrollTo(0, saved.y);
    }
  } catch (e) {}
  var saveY = function () {
    try {
      var s = JSON.parse(sessionStorage.getItem('femalin:list') || '{}');
      s.y = window.scrollY;
      sessionStorage.setItem('femalin:list', JSON.stringify(s));
    } catch (e) {}
  };
  window.addEventListener('pagehide', saveY);
  grid.addEventListener('click', saveY);
})();
