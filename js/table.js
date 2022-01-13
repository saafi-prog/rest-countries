async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population');
    const countries= await response.json();
    let countryName='';
    const num= new Intl.NumberFormat("en");


        for(const country of countries){
        countryName+=`<tr> 
        <th class="text-nowrap">${country.name.official}</th>
        <td class=" text-end">${num.format(country.area)}</td>
        <td class=" text-end">${num.format(country.population)}</td>
        <td class=" text-start text-nowrap">${country.capital}</td>
        </tr>`;
       
    }
    document.querySelector("#data").innerHTML = countryName ;
    
}
window.addEventListener('load', render());


