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
        <td class=" text-start">${country.capital}</td>
        </tr>`;
       
    }
    document.querySelector("#data").innerHTML = countryName ;
    
}
window.addEventListener('load', render());


/*
async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population');
    const areas= await response.json();
    let area='';
    for(const area of areas){
        area+=`<td>${area.name}</td>`;
    }
    const td= document.querySelector("#info");
    td.innerHTML= area;

}
window.addEventListener('load', render());


async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population');
    const capitals= await response.json();
    let countryCapital='';
    for(const capital of capitals){
        countryCapital+=`<td>${capital.name}</td>`;
    }
    const td= document.querySelector("#info");
    td.innerHTML= countryCapital;

}
window.addEventListener('load', render());


async function render(){
    const response= await fetch('https://restcountries.com/v3.1/region/europe?fields=name,capital,area,population');
    const populations= await response.json();
    let population='';
    for(const population of populations){
        po+=`<td>${population.name}</td>`;
    }
    const td= document.querySelector("#info");
    td.innerHTML= population;

}
window.addEventListener('load', render());
*/