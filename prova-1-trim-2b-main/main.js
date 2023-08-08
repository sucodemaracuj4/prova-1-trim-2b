function searchMusicas() {
  let userinput = document.getElementById('searchInput').value.toLowerCase();
  let musicItems = document.querySelectorAll('.musicShrek1');
  
  for (let i = 0; i < musicItems.length; i++) {
    let musicTitle = musicItems[i].querySelector('h4').textContent.toLowerCase();

    if (musicTitle.includes(userinput)) {
      let atual = musicItems[i];
      atual.scrollIntoView({ behavior: 'smooth', block: 'start' });
      atual.style.background = '#6B8E23';
      
      setTimeout(() => {
        atual.style.background = '#d3cca511'// Reverte para a cor original
      }, 1000); // Atraso de 2 segundos (2000 milissegundos)
      
      break;
    }
  }
}