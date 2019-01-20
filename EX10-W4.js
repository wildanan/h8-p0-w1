function changeMe(arr) {
  for (var i = 0; i < arr.length; i++){
    var actor = {}
    actor.firstName = arr[i][0]
    actor.lastName = arr[i][1]
    actor.gender = arr[i][2]
    if (arr[i][3] === undefined ){
      actor.age = 'Invalid Birth Year'
    } else if (arr[i] === undefined){
      actor = ''
    } else{
      actor.age = Math.abs(arr[i][3] - 2019)
    }
    console.log(actor)
  }
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""