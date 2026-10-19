let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

let tertinggi = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > tertinggi.score) {
    tertinggi = studentsScore[i];
  }
}

console.log("Nama  : " + tertinggi.name);
console.log("Nilai : " + tertinggi.score);