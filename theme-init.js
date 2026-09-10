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

  document.documentElement.classList.toggle('theme-dark', theme === 'dark');
  document.documentElement.classList.toggle('theme-light', theme !== 'dark');
  document.documentElement.lang = language === 'id' ? 'id' : 'en';
})();
