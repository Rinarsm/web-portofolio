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

  // Keep the saved language from briefly showing the English fallback while
  // the deferred translation script is being applied. English is the HTML
  // fallback, so only Indonesian needs the short pre-translation guard.
  const selectedLanguage = language === 'id' ? 'id' : 'en';
  root.lang = selectedLanguage;
  root.classList.toggle('i18n-pending', selectedLanguage === 'id');
})();
