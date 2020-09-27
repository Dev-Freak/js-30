const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const suggestions = document.querySelector("ul.suggestions");
const input = document.querySelector("input.search");
const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((result) => cities.push(...result));

const numberWithCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const emptySearch = () => {
  const html = ["Filter for a city", "or a state"]
    .map((item) => `<li><span>${item}</span></li>`)
    .join("");

  suggestions.innerHTML = html;
};

const findMatches = (textToMatch) => {
  const filteredCities = cities.filter((place) => {
    const regex = new RegExp(textToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });

  return filteredCities;
};

function updateMatches() {
  const searchInput = this.value;
  let matchedCities;

  if (!searchInput) emptySearch();
  else {
    matchedCities = findMatches(searchInput);

    const html = matchedCities
      ?.map(({ city, state, population }) => {
        const regex = new RegExp(searchInput, "gi");
        const cityName = city
          .toString()
          .replace(regex, `<span class="hl">${searchInput}</span>`);
        const stateName = state
          .toString()
          .replace(regex, `<span class="hl">${searchInput}</span>`);

        return `
        <li>
          <span>${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(population)}</span>
        </li>
      `;
      })
      .join("");

    suggestions.innerHTML = html;
  }
}

input.addEventListener("input", updateMatches);
