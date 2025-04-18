function findMax(array, startIndex, lastIndex){
    if(startIndex === lastIndex){
        return [array[startIndex], array[startIndex]];
    }

    if((lastIndex - startIndex) === 1){
        if(array[startIndex] > array[lastIndex]){
            return [array[lastIndex], array[startIndex]];
        } else {
            return [array[startIndex], array[lastIndex]];
        }
    }

    else {
        let mid = Math.floor((startIndex + lastIndex) / 2);
        let [leftMax] = findMax(array, startIndex, mid);
        let [rightMax] = findMax(array, mid + 1, lastIndex);

        return [Math.max(leftMax, rightMax)];
    }
}

const arreglo = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));

console.log(arreglo);


let max = findMax(arreglo, 0, arreglo.length - 1);

console.log(max);