let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function changeCountry(band) {
  band.country = 'Canada';
  return band;
}

function capitalizeName(band) {
  let bandName = band.name.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  });
  band.name = bandName.join(' ')
  return band
}

function removeDot(band) {
  let words = band.name.split(' ');

  words = words.map(word => {
    if (word[word.length - 1] === '.') {
      return word.slice(0, word.length - 1);
    } else {
      return word;
    }
  });

  band.name = words.join(' ');
  return band
}

function processBands(bands) {
  return bands.map(band => {
    changeCountry(band);
    capitalizeName(band);
    removeDot(band);
    return band;
  });
}

console.log(processBands(bands));
console.log(bands);
