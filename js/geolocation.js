
async function render(){
    let response= await fetch('https://restcountries.com/v3.1/region/europe?fiels=maps;name;cca2;capital');
    const countries= await response.json();
    let countryName='';
    
    for(const country of countries){
      if ( country.cca2=="FR"){
        
        countryName+= `<option value="${country.cca2}" selected>${country.name.official}</option>`;
      } else {
        countryName += `<option value="${country.cca2}">${country.name.official}</option>`;
      }
  }
  document.querySelector("#countrySelect").innerHTML=countryName;

 response= await fetch('https://restcountries.com/v3.1/alpha/fr?fields=capitalInfo');
 let capital = await response.json();
 /*console.log(capital);*/
    mapCountry= `<iframe loading="lazy" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDYSeSmAnW7Adm1d7umO_v9ej5xbNnE5yI
            &center=${capital.capitalInfo.latlng[0]},${capital.capitalInfo.latlng[1]}&zoom=10" allowfullscreen></iframe>`;
    document.querySelector('#maps').innerHTML = mapCountry; 
    
 

const selectElement = document.querySelector('#countrySelect');
selectElement.addEventListener('change', async(event) => {

const response = await fetch (`https://restcountries.com/v3.1/alpha/${event.target.value}?fields=capitalInfo`);
let capitalMap = await response.json();
mapCountry= `<iframe loading="lazy" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDYSeSmAnW7Adm1d7umO_v9ej5xbNnE5yI
  &center=${capitalMap.capitalInfo.latlng[0]},${capitalMap.capitalInfo.latlng[1]}&zoom=10&language=en" allowfullscreen></iframe>`;
  
  /*selectElement.value = event.target.value;
  console.log( selectElement.value) */
  
  document.querySelector('#maps').innerHTML = mapCountry;
});
}
window.addEventListener('load', render())