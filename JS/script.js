
async function render(){
    const response =  await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');
    const countries = await response.json();
    let content='' ;
    for( const country of countries)  {
        content+= `<li>${country.name.official}</li>`;
        
    };
    const ul= document.querySelector ( "#countries");
    ul.innerHTML= content;
}

window.addEventListener('load', render());