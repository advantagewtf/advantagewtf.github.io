document.addEventListener('DOMContentLoaded', async () => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchResultTemplate = document.getElementById('searchResultTemplate').innerHTML;

  searchResults.innerHTML = 'Games are loading...';

  try {
    const data = await fetch('games.json').then(response => response.json());
    const renderSearchResults = (searchTerm = '') => {
      searchResults.innerHTML = '';
      const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      filteredResults.forEach(result => {
        const renderedTemplate = searchResultTemplate.replace(/{{(.*?)}}/g, (match, key) => result[key.trim()]);
        searchResults.innerHTML += renderedTemplate;
      });
    };

    renderSearchResults();

    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.trim();
      renderSearchResults(searchTerm);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
