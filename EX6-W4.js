function digitPerkalianMinimum(angka) {
  var hasilBagi 
  var arr = []
  var numString = ''
  var cek = 0
  
  for (var i = 1; i <= angka; i++) { 
    hasilBagi = angka / i; //mencari angka-angka bagi dari var angka
    numString = i.toString() + hasilBagi.toString(); //dijadikan string untuk mencari indeks dimana angka yg dicari adalah angka perkalian yang hanya memiliki 2 digit angka
    
    
    
    if (hasilBagi % 1 === 0) { //untuk mencari bilangan pembagian angka yang memiliki angka 0 jika di modulus dengan 1
      arr.push(numString);//untuk mmembuat array dari barisan hasil perkalian yang menghasilkan angka
      
      if (cek === 0) {
        cek = numString.length;
        // console.log(numString.length)//jika var cek masih kosong, maka masukkan lngth dari numString
      } else {
        if (cek > numString.length) {
          cek = numString.length; //jika cek lebih besar dari numString length, maka cetak cek menjadi length numString
        }
      }
    }
  }
  
  return cek;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
