const searchInput = document.getElementById("search");
const searchDisplay = document.getElementById("search-display");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  searchDisplay.textContent = query;
});
