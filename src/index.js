import { getCountries } from "./service";
import { Countries } from './Countries';
import { SelectContinent, GenerateSelect } from './Select';

export const divMain = document.querySelector('#main');
const inputSearch = document.querySelector('#input-search');
const aside = document.querySelector('#aside');

let countries = [];
let select;

getCountries().then(res => {
    countries = res.data;
    select = GenerateSelect(SelectContinent(countries))
    input(countries)
    select.addEventListener('change', (e) => {
        e.target.value == 'all' ?
            mainAppend(countries) :
            mainAppend(countries.filter(country => country.region == e.target.value))
    })
    aside.appendChild(select)
    mainAppend(countries)
});

const input = countries => {
    inputSearch.addEventListener('input', (event) => {
        divMain.innerHTML = '';
        let tmp = countries.filter(country => country.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
        divMain.append(...Countries(tmp))
    })
}
const mainAppend = array => {
    divMain.innerHTML = '';
    divMain.append(...Countries(array));
    input(array);
}

