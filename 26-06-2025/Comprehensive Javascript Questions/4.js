function flattenArr(arr) {
    let result = [];
    for(let i in arr){
        if(arr[i].length === undefined){
            result.push(arr[i]);
        }
        else {
            result = result.concat(flattenArr(arr[i]));
        }
    }
    return result;
}
console.log(flattenArr([1, [2, [3, 4], 5], 6]))