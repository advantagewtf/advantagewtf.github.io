document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const searchResultTemplate = `
    <div class="game-card">
      <div class="game-header">
        <img src="{{image}}" alt="{{title}}" />
      </div>
      <div class="game-content">
        <div class="title">{{title}}</div>
        <div class="buttons">
          <button class="launch-normal button">Launch Normal</button>
          <button class="launch-blank button">Launch Blank</button>
        </div>
      </div>
    </div>
  `;

  const dataScript = document.getElementById('gamesData');
  if (!dataScript) return console.error('No gamesData found!');

  const data = JSON.parse(dataScript.textContent);

  const renderSearchResults = (searchTerm = '') => {
    searchResults.innerHTML = '';
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fragment = document.createDocumentFragment();

    filtered.forEach(result => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = searchResultTemplate.replace(/{{(.*?)}}/g, (_, key) => result[key.trim()] || '');
      const card = wrapper.firstElementChild;

      card.querySelector('.launch-normal').addEventListener('click', () => {
        window.location.href = result.link;
      });

      card.querySelector('.launch-blank').addEventListener('click', () => {
        const newWin = window.open('', '_blank');
        fetch(result.link)
          .then(res => res.text())
          .then(html => {
            newWin.document.open();
            newWin.document.write(html);
            newWin.document.close();
          })
          .catch(err => {
            newWin.document.write('<h1>Error loading game</h1>');
            console.error(err);
          });
      });

      fragment.appendChild(card);
    });

    searchResults.appendChild(fragment);
  };

  renderSearchResults();

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderSearchResults(searchInput.value.trim());
    }, 200);
  });
});
