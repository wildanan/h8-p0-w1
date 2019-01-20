function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var biaya = 2000
  var angkot = []
  for (var i = 0; i < arrPenumpang.length; i++) {
    console.log(arrPenumpang[i][2])
    var bangku = {}
    bangku.penumpang = arrPenumpang[i][0]
    bangku.naikDari = arrPenumpang[i][1]
    bangku.tujuan = arrPenumpang[i][2]
    bangku.bayar = biaya * (rute.indexOf(bangku.tujuan) - rute.indexOf(bangku.naikDari))
   
    angkot.push(bangku)
  }
  
  return angkot
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]