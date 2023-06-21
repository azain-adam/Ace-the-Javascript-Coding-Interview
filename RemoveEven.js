function removeEven(arr) {
    var oddNum = []
    for (let i of arr){
        if(i % 2 != 0){
            oddNum.push(i)
        }
    }
    return oddNum;
}
console.log(removeEven([1,2,4,5,10,6,3]))