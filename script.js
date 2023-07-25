const countries = [
  { id: "ES", name: "Spain", visited: false },
  // Add other countries as needed
];

document.addEventListener("DOMContentLoaded", function () {
  const map = document.getElementById("map");
  countries.forEach((country) => {
    const countryElement = document.getElementById(country.id);
    countryElement.addEventListener("click", () => {
      if (country.visited) {
        countryElement.style.fill = "transparent"; // colour for not visited
      } else {
        countryElement.style.fill = "green"; // colour for visited
      }
      country.visited = !country.visited; // Toggle the visited state
    });
  });
});
