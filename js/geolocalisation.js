async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=maps,name');
    const countries= await response.json();
    let countryName='';
    for(const country of countries){
        countryName+=

        `<select>
        <option value="<a${country.maps.googleMaps}> </a>" >${country.name.official}</option>
        </select>`;
    }
    document.querySelector("#maps").innerHTML=countryName;
    ul.innerHTML= countryName;
}
window.addEventListener('load', render());