function removeDuplicate(arr) {
    return(arr.filter((item,index) => arr.indexOf(item) === index));
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))