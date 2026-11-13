// StudySpot directory: simple search and category filtering.
const searchInput = document.getElementById("space-search");
const filters = document.querySelectorAll('input[name="space-filter"]');
const cards = document.querySelectorAll(".space-card");
const count = document.getElementById("results-count");
const emptyMessage = document.getElementById("no-results");

function filterSpaces() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedFilter = document.querySelector('input[name="space-filter"]:checked').value;
  let visibleCount = 0;

  cards.forEach(function (card) {
    const matchesCategory =
      selectedFilter === "all" || card.classList.contains(selectedFilter);
    const matchesSearch = card.textContent.toLowerCase().includes(searchText);
    const showCard = matchesCategory && matchesSearch;

    card.hidden = !showCard;
    if (showCard) visibleCount++;
  });

  count.textContent = "Showing " + visibleCount + " of " + cards.length + " sample spaces";
  emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterSpaces);
filters.forEach(function (filter) {
  filter.addEventListener("change", filterSpaces);
});

filterSpaces();