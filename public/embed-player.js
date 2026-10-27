document.addEventListener('DOMContentLoaded', () => {
  const players = document.querySelectorAll('.embed-player');
  players.forEach(player => {
    const preview = player.querySelector('.embed-preview');
    const frameWrapper = player.querySelector('.embed-frame-wrapper');
    const iframe = player.querySelector('.embed-iframe');
    const embedUrl = player.dataset.embedUrl;
    let isPlaying = false;

    const activatePlayer = () => {
      if (isPlaying) return;
      isPlaying = true;
      preview.hidden = true;
      frameWrapper.hidden = false;
      iframe.src = embedUrl + (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
    };

    preview.addEventListener('click', activatePlayer);
    preview.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activatePlayer();
      }
    });
  });
});
