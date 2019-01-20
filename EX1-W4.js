function angkaPrima (angka){
    //bilangan prima > 1, faktor pembaginya adalah 1 dan bilangan itu sendiri
    for (var i = 2; i < angka; i++){
      console.log(angka, i)
        if (angka % i === 0){ //karena angka prima hanya akan habis dibagi dengan bilangannya sendiri atau 1
            return false
        }//jika angka tidak habis pada proses %, maka angka tersebut merupakan angka prima
      }
      return true
    }
    
    console.log(angkaPrima (3)) // true
    console.log(angkaPrima (7)) // true
    console.log(angkaPrima (6)) // false
    console.log(angkaPrima (21)) // true
    console.log(angkaPrima (33)) // false
    
