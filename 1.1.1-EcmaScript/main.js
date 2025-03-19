const suma = function(a, b){
    return a + b;
}

//Arrow function, si después de la flecha yo usara llaves, ahí sí le tengo que declarar el return
const sumaAF = (a,b)=> a + b;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = array.map((item, index) => {
    return item**item;
})
console.log(newArray);

const forEachResult = newArray.forEach((item) => {
    console.log(item);
})

let nombre = "Lizeth";

const pElements = array.map((item) =>  `<h1>${item}</h1>`);
console.log(pElements);

const miDiv = document.querySelector(".mi-div");

pElements.forEach((element) => {
    miDiv.insertAdjacentHTML("beforeend", element);
});

