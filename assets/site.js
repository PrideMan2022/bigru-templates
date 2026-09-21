/* BigRu.ee — демонстрационные сайты.
   Пока что cookie-баннер просто убирается по клику на любую из кнопок,
   чтобы можно было спокойно смотреть дизайн. Выбор запоминается в браузере,
   поэтому при переходах между страницами баннер больше не появляется. */
(function () {
  'use strict';

  var KEY = 'bigru-demo-cookie-choice';
  var bar = document.querySelector('.cookie');
  if (!bar) return;

  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) { /* приватный режим */ }

  if (saved) {
    bar.hidden = true;
    return;
  }

  function dismiss(choice) {
    try { window.localStorage.setItem(KEY, choice); } catch (e) { /* приватный режим */ }
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      bar.hidden = true;
      return;
    }
    bar.classList.add('is-gone');
    window.setTimeout(function () { bar.hidden = true; }, 200);
  }

  Array.prototype.forEach.call(bar.querySelectorAll('button'), function (btn) {
    btn.addEventListener('click', function () {
      dismiss((btn.textContent || '').trim().toLowerCase());
    });
  });
})();
