async function fetchData(){
    try {
     const response = await fetch("https://restcountries.com/v3.1/all"); 
     const data = await response.json();
     console.log(data);

     data.forEach(element => {
         const countryRequired = {
            ...element, 
            name: element.name.common,
            flag : element.flags.png,
            population: element.population,
            region : element.region,
            capital : element.capital
         }
         createCountry(countryRequired)
     });

    } catch (error) {
        console.log(error);
    }
}

function createCountry({name, flag, population, region, capital}) {
 document.body.innerHTML += `
  <div class = "container">
   <img src= "${flag}" alt="${name}" class="flag" />
   <div class= "info">
    <h2>${name}</h2>
    <p><span>Population : </span>${population}</p>
    <p><span>Region : </span>${region}</p>
    <p><span>Capital : </span>${capital}</p>
   </div>
  </div>
    `
}


fetchData();