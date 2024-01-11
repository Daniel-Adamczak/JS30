const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('#search-form-input');
const suggestions = document.querySelector('#suggestions');
const fivePerSiteBtn = document.querySelector('#fivePerSiteBtn');
const tenPerSiteBtn = document.querySelector('#tenPerSiteBtn');
const fifteenPerSiteBtn = document.querySelector('#fifteenPerSiteBtn');
const prevSiteBtn = document.querySelector('#prevSiteBtn');
const nextSiteBtn = document.querySelector('#nextSiteBtn');
const resultsNumberOutput = document.querySelector('#resultsNumberOutput');

let citiesPerSite = 5;
let resultsNumber = 0;
let pageNumber= 1;

[fifteenPerSiteBtn, fivePerSiteBtn, tenPerSiteBtn].forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    citiesPerSite = Number(e.target.innerText);
    displayFilteredData();
    fifteenPerSiteBtn.classList.remove('bg-sky-700', 'text-[var(--base)]');
    fivePerSiteBtn.classList.remove('bg-sky-700', 'text-[var(--base)]');
    tenPerSiteBtn.classList.remove('bg-sky-700', 'text-[var(--base)]');
    btn.classList.add('bg-sky-700', 'text-[var(--base)]');
  });
});

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function filterOutput(searchInput, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(searchInput.value, 'gi');

    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
prevSiteBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(pageNumber>=2){pageNumber--;}
  else{pageNumber=1}
  displayFilteredData();
  })
  nextSiteBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    pageNumber++;
    displayFilteredData();
    })
function displayFilteredData() {
  const filteredData = filterOutput(searchInput, cities);
  resultsNumber=filteredData.length;

resultsNumberOutput.innerText=`Number of results: ${resultsNumber}
Current page:${pageNumber}
Displayed results: from ${((pageNumber-1)*citiesPerSite+1)} to ${pageNumber*citiesPerSite}`;
  const filteredDataFragment = filteredData.slice((pageNumber-1)*citiesPerSite, pageNumber*citiesPerSite);
  const dataToDisplay = filteredDataFragment
    .map((city) => {
      const regex = new RegExp(searchInput.value, 'gi');
      const cityName = city.city.replace(
        regex,
        `<span class="bg-sky-700 text-[var(--base)]">${searchInput.value}</span>`
      );
      const stateName = city.state.replace(
        regex,
        `<span class="bg-sky-700 text-[var(--base)]">${searchInput.value}</span>`
      );
      const populationWithSeparators = numberWithCommas(city.population);

      return `
    <li class='text-center rounded-xl border-2 border-sky-700 capitalize my-2 shadow-md p-2'>
<span class='font-bold'>${cityName}</span><span>, ${stateName}</span>
<p>Population: ${populationWithSeparators}</p>
    </li>`;
    })
    .join('');
  suggestions.innerHTML = dataToDisplay;
}

searchInput.addEventListener('keyup', displayFilteredData);
