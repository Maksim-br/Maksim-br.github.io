"use strict";

let table = document.querySelector("table");

let innerTable = "";

const URL_TARGET = "https://restcountries.com/v3.1/all";

async function logCountry() {
    const response = await fetch(URL_TARGET);
    const countrys = await response.json();
    console.log(countrys);
    return countrys.sort((a, b) => {
        var nameA = a.translations.fra.common.toLowerCase();
        var nameB = b.translations.fra.common.toLowerCase();

        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
}

logCountry()
    .then(countrys => {
        for (const item of countrys) {
            innerTable += `<tr>\n<td>${item.translations.fra.common}</td>\n<td><img src="${item.flags.svg}" alt=""></td>\n<td>${item.population}</td>\n</tr>\n`;
        }
        table.innerHTML += innerTable;
    });
