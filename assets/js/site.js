(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');
  if (button && nav) button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('span').textContent = open ? '－' : '＋';
  });

  // Poetry audio is rendered only on the poems index and individual poem pages.
  const audio = document.querySelector('[data-poetry-audio]');
  if (!audio) return;
  const play = document.querySelector('[data-audio-toggle]');
  const seek = document.querySelector('[data-audio-seek]');
  const volume = document.querySelector('[data-audio-volume]');
  const current = document.querySelector('[data-audio-time]');
  const duration = document.querySelector('[data-audio-duration]');
  const key = 'va-poetry-audio-state';
  const fmt = n => Number.isFinite(n) ? `${String(Math.floor(n/60)).padStart(2,'0')}:${String(Math.floor(n%60)).padStart(2,'0')}` : '00:00';

  try {
    const saved = JSON.parse(sessionStorage.getItem(key) || '{}');
    if (typeof saved.time === 'number') audio.currentTime = saved.time;
    if (typeof saved.volume === 'number') audio.volume = saved.volume;
    if (saved.playing) {
      // Browsers may still require a fresh user gesture after a full page load.
      audio.play().catch(() => { if (play) play.textContent = '▶'; });
    }
  } catch (_) {}
  if (volume) volume.value = audio.volume;
  function update() {
    if (current) current.textContent = fmt(audio.currentTime);
    if (duration) duration.textContent = fmt(audio.duration);
    if (seek && Number.isFinite(audio.duration) && audio.duration > 0) seek.value = String(audio.currentTime/audio.duration*100);
    try { sessionStorage.setItem(key, JSON.stringify({time:audio.currentTime,volume:audio.volume,playing:!audio.paused})); } catch (_) {}
    if (play) { play.textContent = audio.paused ? '▶' : 'Ⅱ'; play.setAttribute('aria-label', audio.paused ? 'Play background music' : 'Pause background music'); }
  }
  if (play) play.addEventListener('click', () => audio.paused ? audio.play().catch(()=>{}) : audio.pause());
  if (seek) seek.addEventListener('input', () => { if (Number.isFinite(audio.duration)) audio.currentTime = Number(seek.value)/100*audio.duration; });
  if (volume) volume.addEventListener('input', () => { audio.volume = Number(volume.value); update(); });
  ['timeupdate','loadedmetadata','play','pause','ended'].forEach(e => audio.addEventListener(e, update));
  window.addEventListener('pagehide', update);
  update();
})();