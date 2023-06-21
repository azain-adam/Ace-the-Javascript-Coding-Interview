function findMinimum(arr) {
    var min = arr[0]
    for(let i=1; i<arr.length; i++){
       if(arr[i] < min){
          min = arr[i]
       }
    }
    console.log(min)
    return min;
 }
 console.log(findMinimum([9,2,3,6]))