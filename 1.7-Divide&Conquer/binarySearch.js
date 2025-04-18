function binarySearch(array, target, low, high){
    if(low > high){
        return -1;
    }

    let mid = Math.floor((low + high) / 2);
    
    if(array[mid] === target){
        return mid;
    } else if (array[mid] > target){
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

const arreglo = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));
arreglo.sort((a, b) => a - b);

console.log(arreglo);


let foundTarget = binarySearch(arreglo, 422, 0, arreglo.length - 1);

console.log(foundTarget);