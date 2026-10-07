// Filtrado simple de tabla: texto y género.
(() => {
  const input = document.getElementById('filterText');
  const genre = document.getElementById('filterGenre');
  const clearBtn = document.getElementById('clearFilters');
  const table = document.getElementById('musicTable');
  if (!table) return;

  function normalize(s) {
    return (s || '').toString().toLowerCase().trim();
  }

  function filterTable() {
    const q = normalize(input.value);
    const g = normalize(genre.value);

    Array.from(table.tBodies[0].rows).forEach(row => {
      const title = normalize(row.querySelector('.col-title')?.textContent);
      const artist = normalize(row.querySelector('.col-artist')?.textContent);
      const album = normalize(row.querySelector('.col-album')?.textContent);
      const rowGenre = normalize(row.querySelector('.col-genre')?.textContent);

      const matchesText = !q || title.includes(q) || artist.includes(q) || album.includes(q);
      const matchesGenre = !g || rowGenre === g;

      row.style.display = (matchesText && matchesGenre) ? '' : 'none';
    });
  }

  input?.addEventListener('input', filterTable);
  genre?.addEventListener('change', filterTable);
  clearBtn?.addEventListener('click', () => {
    input.value = '';
    genre.value = '';
    filterTable();
  });

  // Ejecutar al inicio por si hay contenido
  document.addEventListener('DOMContentLoaded', filterTable);
})();