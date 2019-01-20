function cariMedian (arr){
  var median = 0
  var bagi = arr.length / 2
  for (var i = 0; i < arr.length; i++){
    if (arr.length % 2 === 1){
      median = arr[Math.floor(i/2)]

    }else if (arr.length % 2 === 0){
      median = (arr[bagi] + arr[bagi - 1]) / 2
    }
    
  }
return median
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5