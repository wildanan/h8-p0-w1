function graduates (students) {
  var graduation = {}
  // var graduationclas = []
  for (var i = 0; i < students.length; i++) {
    var name = students[i].name
    var score = students[i].score
    var clas = students[i].clas
    

    if (graduation[clas] === undefined) {
      graduation[clas] = []
      // graduation[clas].name = ''
      // graduation[clas].score = ''
      
    }
    if (score > 75) {
      var objKelas = {
        name: name,
        score: score
      }
    graduation[clas].push(objKelas)    
    } 
  }
  
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