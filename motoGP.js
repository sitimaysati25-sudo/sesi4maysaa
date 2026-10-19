var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

var hasil = {};

for (var i = 0; i < motoGP.length; i++) {
  var data = motoGP[i];
  var negara = data.winner.country;

  if (!hasil[negara]) {
    hasil[negara] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  hasil[negara].winningCircuits.push({
    name: data.winner.firstName + ' ' + data.winner.lastName,
    winLocation: data.circuit + ', ' + data.location
  });

  hasil[negara].totalWin++;
}

console.log(JSON.stringify(hasil, null, 2));