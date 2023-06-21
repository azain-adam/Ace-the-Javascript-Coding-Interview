function findSum(arr, value) {
    for (var i =0; i<arr.length; i++) {
       for (var j = i+1; j<arr.length; j++) {
            if ((arr[i] + arr[j]) == value)
                return [arr[i], arr[j]]
        }
    }
    return false;
}
console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81)) 