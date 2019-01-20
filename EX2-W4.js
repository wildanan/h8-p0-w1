function fpb (angka1, angka2){
  var arrBagi1 = []
  var arrBagi2 = []


  for (var i = 0; i < angka1; i++){
    if (angka1 % i === 0){
      arrBagi1.push(i) //looping untuk mencari angka-angka yang bisa dibagi dengan angka1
    }
  }
  for (var j = 0; j < angka2; j++){
    if (angka2 % j === 0){
    arrBagi2.push(j) //looping untuk mencari angka-angka yang bisa dibagi dengan angka2
    }
  }
  for (var k = arrBagi1.length-1; k >= 0; k--){
    for (var l = arrBagi2.length-1; l >= 0; l--){
      if (arrBagi1[k] === arrBagi2[l]){
        return arrBagi1[k] //looping untuk mencari angka yang sama. minus karena angka yang dicari adalah angka terbesar, maka dicari dari belakang
        }
      }
    }
  }
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1