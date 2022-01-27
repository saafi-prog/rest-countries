
async function render() {
  let response = await fetch('https://restcountries.com/v3.1/region/europe?fiels=cca2');
  const countries = await response.json();
  const countryName = countries.map(country => `<option value="${country.cca2}"${country.cca2 == "FR" ? 'selected' : ''}>${country.name.official}</option>`);
  document.querySelector("#countrySelect").innerHTML = countryName;
  /*
  for(const country of countries){
  countryName += <option value="${country.cca2}">${country.name.official}</option>;
  if ( country.cca2=="FR"){
  countryName+= `<option value="${country.cca2}" selected>${country.name.official}</option>`;
  }}*/


  response = await fetch('https://restcountries.com/v3.1/alpha/fr?fields=capitalInfo');
  let capital = await response.json();
  const latitude= capital.capitalInfo.latlng[0];
  const longitude = capital.capitalInfo.latlng[1];
  let countryMap = document.querySelector('#frame');
  countryMap.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDYSeSmAnW7Adm1d7umO_v9ej5xbNnE5yI
&center=${latitude},${longitude}&zoom=10 &language=en `;



  const selectElement = document.querySelector('#countrySelect');
  selectElement.addEventListener('change', async (event) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${event.target.value}?fields=capitalInfo`);
    let otherCapital = await response.json();
    const latitude= otherCapital.capitalInfo.latlng[0];
    const longitude = otherCapital.capitalInfo.latlng[1];
    countryMap.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDYSeSmAnW7Adm1d7umO_v9ej5xbNnE5yI
 &center=${latitude},${longitude}&zoom=10 &language=en`;

  });
}
window.addEventListener('load', render())