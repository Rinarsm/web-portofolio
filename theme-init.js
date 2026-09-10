(function () {
  function getTabState() {
    try {
      if (!window.name || !window.name.startsWith('rinaPortfolioState:')) return {};
      return JSON.parse(window.name.slice('rinaPortfolioState:'.length)) || {};
    } catch (error) {
      return {};
    }
  }

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  const tabState = getTabState();
  const theme = tabState.theme || safeGet('portfolio-theme') || 'dark';
  const language = tabState.language || safeGet('portfolio-language') || 'en';

  const root = document.documentElement;

  // Apply the saved theme before the stylesheet/body are painted so page
  // navigation never flashes the opposite theme.
  root.classList.toggle('theme-dark', theme === 'dark');
  root.classList.toggle('theme-light', theme !== 'dark');

  // Paint the correct toggle icon from the very first frame. The HTML uses a
  // moon character as fallback, so without this tiny preflight style the icon
  // can briefly show the light-mode symbol while navigating between pages.
  // Keeping this here (in the head script) makes the icon follow the stored
  // theme before the main stylesheet and deferred script finish loading.
  const themePreflightStyle = document.createElement('style');
  themePreflightStyle.id = 'theme-preflight-style';
  themePreflightStyle.textContent = `
    .theme-knob { font-size: 0 !important; transition: none !important; }
    .theme-knob::before {
      content: "☾";
      font-size: .78rem;
      line-height: 1;
    }
    html.theme-dark .theme-knob::before { content: "☀"; }
    html.theme-light .theme-knob::before { content: "☾"; }
    html.theme-dark .theme-toggle .theme-knob { transform: translateX(22px); }
    html.theme-light .theme-toggle .theme-knob { transform: translateX(0); }
  `;
  document.head.appendChild(themePreflightStyle);

  // Re-enable the normal knob transition only after the first paint so page
  // navigation never looks like the toggle is changing modes by itself.
  window.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        themePreflightStyle.remove();
      });
    });
  }, { once: true });

  // Keep the saved language from briefly showing the English fallback while
  // the deferred translation script is being applied. English is the HTML
  // fallback, so only Indonesian needs the short pre-translation guard.
  const selectedLanguage = language === 'id' ? 'id' : 'en';
  root.lang = selectedLanguage;
  root.classList.toggle('i18n-pending', selectedLanguage === 'id');
})();
