// Search and filter the sample study spaces.
const searchInput = document.getElementById("space-search");

if (searchInput) {
  const filters = document.querySelectorAll('input[name="space-filter"]');
  const cards = document.querySelectorAll(".space-card");
  const count = document.getElementById("results-count");
  const emptyMessage = document.getElementById("no-results");
  const clearButton = document.getElementById("clear-filters");
  const allFilter = document.getElementById("all");

  function filterSpaces() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selected = document.querySelector('input[name="space-filter"]:checked');
    const category = selected ? selected.value : "all";
    let visible = 0;

    cards.forEach(function (card) {
      const matchesText = card.textContent.toLowerCase().includes(searchText);
      const matchesCategory = category === "all" || card.classList.contains(category);
      const showCard = matchesText && matchesCategory;

      card.hidden = !showCard;
      if (showCard) visible++;
    });

    count.textContent = "Showing " + visible + " of " + cards.length + " spaces";
    emptyMessage.hidden = visible !== 0;
  }

  function clearFilters() {
    searchInput.value = "";
    allFilter.checked = true;
    filterSpaces();
    searchInput.focus();
  }

  searchInput.addEventListener("input", filterSpaces);
  filters.forEach(function (filter) {
    filter.addEventListener("change", filterSpaces);
  });
  clearButton.addEventListener("click", clearFilters);

  filterSpaces();
}