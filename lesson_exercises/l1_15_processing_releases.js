/*
Write Function processReleaseData that processes following movie release data:
Function to generate Array of Objects containing only id & title key/value pairs
Assume that id when existingis an integer greater than 0
Assume that title when existing is a string
Rules:
Keep only releases that have both id and title property present.
Keep only the id and title data for each release.

Data:
input: array of Objects
output: new array of Objects with selected k/v pairs from first object

Algorithm:
create function taking array as arg
filter Object for Objects having both a `id` key & 'title' key
map filtered array to return only k/v pairs id & title
return filtered & transformed array
*/

function processReleaseData(releases) {
  return releases.filter(release => {
    if (release['id'] && release['title'])return release;
  }).map(release => {
    let result = {};
    result['id'] = release['id'];
    result['title'] = release['title']
    return result;
  });
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));