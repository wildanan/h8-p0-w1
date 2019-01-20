function urutkanAbjad(str) {
 var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var ubah = ''

  for (var i = 0; i < alfabet.length; i++){
    for (var j = 0; j < str.length; j++){
      if (alfabet[i] === str[j]){
        ubah += alfabet [i]
      }
    }
  }
  return ubah
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'