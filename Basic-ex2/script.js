"use strict";
let myName = [{
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }, {
        fName: "Lukas",
        lName: "Kaiser"
    }];
let content = document.getElementById("content");
myName.forEach(element => {
    content.innerHTML += `<p>${element.fName} ${element.lName}</p>`;
});
function lastName() {
    myName.forEach(element => {
        console.log(element.lName);
    });
}
setTimeout(lastName, 5000);
