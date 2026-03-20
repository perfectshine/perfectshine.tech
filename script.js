document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Check system preference
    html.setAttribute('data-theme', 'dark');
    updateToggleIcon('dark');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });

  function updateToggleIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
});
