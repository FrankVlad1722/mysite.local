"use strict";

const table = document.getElementById("table-content");

function createTable(start, end, addColor){
    const newTr = document.createElement("tr");

    for (let i = start; i <= end; i++){
        const newTd = document.createElement("td");

        for (let j = 1; j <= 10; j++){
            newTd.innerHTML += addColor ?
                `${createStrHtml(i)} x ${createStrHtml(j)} = ${createStrHtml(i * j)} <br>`
                : `${i} x ${j} = ${i * j} <br>`;
        }

        newTr.appendChild(newTd);
    }
    return newTr;
}

function createStrHtml(number) {
    let str = String(number);

    let one = str.replace(new RegExp('1', 'g'), '<span class="red">1</span>');
    let two = one.replace(new RegExp('2', 'g'), '<span class="green">2</span>');
    let three = two.replace(new RegExp('3', 'g'), '<span class="yellow">3</span>');
    let four = three.replace(new RegExp('4', 'g'), '<span class="blue">4</span>');

    return four;
}

function addTableContent(addColor = false){
    table.append(createTable(1, 5, addColor), createTable(6, 10, addColor));
}
