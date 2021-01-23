export const SelectContinent = countries => new Set(countries.map(country => country.region));

export const GenerateSelect = regions => {
    const select = document.createElement('select');
    select.className = 'select';
    
    const defOption = document.createElement('option')
        defOption.value = '-1'
        defOption.selected = true
        defOption.disabled = true
        defOption.textContent = 'Choose region'

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All regions';

    select.append(defOption,allOption)

    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region ? region : 'Other';
        select.appendChild(option);
    });
    return select;
}