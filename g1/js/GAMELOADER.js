document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Template for each game card (with image and link)
  const searchResultTemplate = `
    <a class="game" href="{{link}}" target="_blank">
      <div class="game-header">
        <img src="{{image}}" alt="" />
      </div>
      <div class="game-content">
        <div class="title">{{title}}</div>
      </div>
    </a>
  `;

  // Parse inline JSON from <script id="gamesData">
  const data = JSON.parse(document.getElementById('gamesData').textContent);

  const renderSearchResults = (searchTerm = '') => {
    searchResults.innerHTML = '';

    const filteredResults = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fragment = document.createDocumentFragment();

    filteredResults.forEach(result => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = searchResultTemplate.replace(/{{(.*?)}}/g, (_, key) => result[key.trim()] || '');
      fragment.appendChild(wrapper.firstElementChild);
    });

    searchResults.appendChild(fragment);
  };

  renderSearchResults();

  // Debounce input for smooth typing
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderSearchResults(searchInput.value.trim());
    }, 200);
  });
});
