// Contact form. Posts JSON to the endpoint set in src/data/site.mjs (formEndpoint).
// The success message appears only after the server confirms receipt; on any failure
// the visitor's text stays in the form.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var endpoint = (window.FEMALIN_CONFIG && window.FEMALIN_CONFIG.formEndpoint) || '';
  var errorBox = document.getElementById('form-error');
  var okBox = document.getElementById('form-success');
  var status = document.getElementById('form-status');
  var fieldError = document.getElementById('field-error');
  var btn = document.getElementById('submit-btn');
  var names = { name: 'Name', email: 'Email', topic: 'Topic', message: 'Message', consent: 'Consent' };

  function showError() { okBox.hidden = true; errorBox.hidden = false; status.focus(); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;
    fieldError.hidden = true;

    var bad = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.name === 'website') return;
      var invalid = !el.checkValidity();
      el.setAttribute('aria-invalid', invalid ? 'true' : 'false');
      if (invalid) bad.push(el);
    });
    if (bad.length) {
      fieldError.textContent = 'Please check: ' + bad.map(function (el) { return names[el.name] || el.name; }).join(', ') + '.';
      fieldError.hidden = false;
      bad[0].focus();
      return;
    }

    // Honeypot: bots fill the hidden field. Pretend nothing happened.
    if (form.elements.website.value) return;

    if (!endpoint) {
      if (window.console) console.warn('Femalin: set formEndpoint in src/data/site.mjs and rebuild to enable the contact form.');
      showError();
      return;
    }

    var data = {};
    new FormData(form).forEach(function (v, k) { if (k !== 'website') data[k] = v; });
    btn.disabled = true;
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.reset();
        form.hidden = true;
        errorBox.hidden = true;
        okBox.hidden = false;
        status.focus();
      })
      .catch(showError)
      .then(function () { btn.disabled = false; });
  });
})();
