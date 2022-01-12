async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name');
    const countries= await response.json();
    let countryName='';
    for(const country of countries){
        countryName+=`<li>${country.name.official}</li>`;
    }
    const ul= document.querySelector("#countries");
    ul.innerHTML= countryName;
}
window.addEventListener('load', render());
