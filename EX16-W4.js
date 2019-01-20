function graduates (students) {
  var graduation = {}
  var graduationclas = []
  for (var i = 0; i < students.length; i++) {
    var name = students[i].name
    var score = students[i].score
    var clas = students[i].clas
    

    if (graduation[clas] === undefined) {
      graduation[clas] = {}
      graduation[clas].name = ''
      graduation[clas].score = ''
      
    }
    if (score > 75){
    graduation[clas].name = name
    graduation[clas].score = score
    }
    
  }
  graduationclas.push(graduation[clas])
  return graduation
  
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    clas: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    clas: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    clas: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    clas: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    clas: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    clas: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    clas: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    clas: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    clas: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}