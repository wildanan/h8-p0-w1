function checkAB(num) {
    var hurufA = 'a'
    var hurufB = 'b'
    var jarakA = 0
    var jarakB = 0
    var jarakAB = 0

    for (var i = 0; i < num.length; i++){
       if (num[i] === hurufA){
         jarakA = i
          // console.log(jarakA)
       }else if (num[i] === hurufB){
         jarakB = i
          // console.log(jarakB)
       }else if (Math.abs(jarakA - jarakB) > 3){
        jarakAB = true 
       }else{
        jarakAB = false
       }
    }
    return jarakAB
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false