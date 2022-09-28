
const calculatetemp = () => {

    const number = document.getElementById('number').value;
    const unit = document.getElementById('tempunit');
    const unit_select = tempunit.options[unit.selectedIndex].value;

    const celToFah = (cel) => {
        let fah = Math.round((cel * 9 / 5) + 32);
        return fah;

    }

    const fahToCel = (fah) => {
        let cel = Math.round((fah - 32) * 5 / 9);
        return cel;

    }
    let result;

    if (unit_select == 'cel') {
        result = celToFah(number);
        document.getElementById('output').innerHTML = `${result}°Fahrenheit`;
    }
    else {
        result = fahToCel(number);
        document.getElementById('output').innerHTML = `${result}°Celcius`;
    }

    // ******************kelvin conversion*************************

    const celToKel = (cel) => {
        let kel = Math.round((cel) + 273.15);
        return kel;

    }

    const fahToKel = (fah) => {
        let kel = Math.round(((fah - 32) * 5 / 9) + 273.15);
        return kel;

    }


    let resultk;

    if (unit_select == 'cel') {
        resultk = celToKel(number);
        document.getElementById('outputk').innerHTML = `${resultk} Kelvin`;
    }
    else {
        resultk = fahToKel(number);
        document.getElementById('outputk').innerHTML = `${resultk} Kelvin`;
    }


}