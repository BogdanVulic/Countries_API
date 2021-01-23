import { Countries } from "./Countries";
import { divMain} from './index';

export const Country = (country, countries) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'popup';
    
    const img = document.createElement('img');
    img.src = country.flag;
    img.className = 'flag';

    const name = document.createElement('p');
    name.textContent = country.name;

    divContainer.append(img, name);
    divContainer.addEventListener('click', () => {
        divMain.innerHTML = '';
        divMain.append(...Countries([countries.find(country => country.name == name.textContent)]))
        console.log(countries.find(country => country.name == name.textContent))
    })
    return divContainer;
}