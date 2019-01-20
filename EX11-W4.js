function shoppingTime(memberId, money) {

    var listItem = [
    ['sepatu stacattu', 1500000],
    ['baju zoro', 500000],
    ['baju h&n', 250000],
    ['sweater uniklooh', 175000],
    ['casing handphone', 50000]
    ]
  
    if (memberId === undefined || money === undefined || memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if (money <= 15000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        var buyer = {}
        buyer.memberId = memberId
        buyer.money = money
        buyer.listPurchased = []
        buyer.changeMoney = 0
  
        for (var i = 0; i < listItem.length; i++) {
          var harga = listItem [i][1]
          var change = money - listItem[i][1]
          if (money >= harga) {
            buyer.listPurchased.push(listItem[i][0])
            buyer.changeMoney = change
          }
        }
    }
    return buyer
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
