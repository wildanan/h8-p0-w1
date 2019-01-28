function cariModus(arr) {
  var modus = []
  var same = 0
  // console.log(arr.length)
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      // console.log(arr[i] + '===')
      if (arr[i] === arr[j]){
        modus.push(arr[i])
        // console.log(arr[i] +'===>' + arr[i])
      } 
    }
  }
  // console.log(modus + '<===')
  // console.log(arr[i] + '<===')
  if (modus[0] === undefined || modus.length === arr.length * 2 ) {
    return -1
  } 
  return modus[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1