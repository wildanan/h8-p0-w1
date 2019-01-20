function highestScore (students) {
  

  var school = {}
  for (var i = 0; i < students.length; i++) {
    var name = students[i].name
    var score = students[i].score
    var clas = students[i].clas

      if (school[clas] === undefined) {
        school[clas] = {}
        school[clas].name = ''
        school[clas].score = 0
      }
      school[clas].name = name
      school[clas].score = Math.max(score)
  }
  return school

}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}