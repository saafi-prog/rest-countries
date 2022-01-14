async function render(){
    const response= await fetch("https://restcountries.com/v3.1/region/europe?fields=flags,name,capital,maps");
    const countries= await response.json();
    let countryName='';
    
        for(const country of countries){
        countryName+=
                `<div class="col" >
                    <div class=" card h-100">
                        <img src="${country.flags.png}" class="card-img-top">
                        <a class="card-block stretched-link text-decoration-none" href="${country.maps.openStreetMaps}" target="_blank"></a>
                        <div class="card-body">
                            <h5 class="card-title">${country.name.official}</h5>
                            <p class="card-text">${country.capital}</p>
                        </div>
                    </div>
                </div>`;
}
    document.querySelector('#cards').innerHTML = countryName ;   
}

window.addEventListener('load', render());

