const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

while(siguiente < arr.length){
    if(arr[inicio].charAt(0) === arr[siguiente].charAt(0)){
        return [arr[inicio], arr[siguiente]];
        
    } else {
        inicio++;
        siguiente++;
    }
}
return null;
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]