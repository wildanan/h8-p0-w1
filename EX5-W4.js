function ubahHuruf(kata) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var hurufSelanjutnya = ''
  for (var i = 0; i < kata.length; i++){
    for (var j = 0; j < alfabet.length; j++){
      if (kata[i] === alfabet[j]){
        hurufSelanjutnya += alfabet[j + 1]
      }
    }
  }
  return hurufSelanjutnya
}

TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu