function procurarMusicas() {
    let userinput = document.getElementById('searchInput').value.toLowerCase();
    let musicItems = document.querySelectorAll('.musicShrek1');

    for (let i = 0; i < musicItems.length; i++) {
      let musicTitle = musicItems[i].querySelector('h4').textContent.toLowerCase();

      if (musicTitle.includes(userinput)) {
        musicItems[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
  }