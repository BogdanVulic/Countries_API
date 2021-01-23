import { Country } from './Country';

export const Countries = (countries) => 
    countries.length == 1 ? countries.map(country => OneCountry(country)) :
                            countries.map(country => Country(country, countries));
    


const OneCountry = country => {
    const divContainer = document.createElement('div');
    divContainer.className = 'one-country';
    
    const img = document.createElement('img');
    img.src = country.flag;
    img.className = 'one-flag';

    const name = document.createElement('p');
    name.textContent = `Name: ${country.name}`;

    const nativeName = document.createElement('p');
    nativeName.textContent = `Native name: ${country.nativeName}`;

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population}`;

    const capital = document.createElement('p');
    capital.textContent = `Capital: ${country.capital}`;

    const domen = document.createElement('p');
    domen.textContent = `Domen: ${country.topLevelDomain.join(', ')}`;

    divContainer.append(img, name, nativeName, population, capital, domen);
    return divContainer;
}