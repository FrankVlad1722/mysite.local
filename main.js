"use strict";

const table = document.getElementById("table-content");

function createTable(start, end){
    const newTr = document.createElement("tr");

    for (let i = start; i <= end; i++){
        const newTd = document.createElement("td");

        for (let j = 1; j <= 10; j++){
            newTd.innerHTML += `${i} x ${j} = ${i * j} <br>`;
        }

        newTr.appendChild(newTd);
    }
    return newTr;
}

table.append(createTable(1, 5), createTable(6, 10));
