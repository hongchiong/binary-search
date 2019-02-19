const fs = require('fs');

let rawdata = fs.readFileSync('phonebook.json');
//Array of Objects
let phonebook = JSON.parse(rawdata);

const binSearch = (arr, attr, val) => {
  //sort array
  switch (attr) {
    case 'id':
      arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      break;

    case 'phone':
      arr.sort((a,b) => (a.phone > b.phone) ? 1 : ((b.phone > a.phone) ? -1 : 0));
      break;

    case 'name':
      arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      break;
  };

  function searchAlgo(a, val) {
    if (a[Math.floor(a.length/2)][attr]  == val) {
      return a[Math.floor(a.length/2)];
    } else if (a[Math.floor(a.length/2)][attr] > val) {
      return searchAlgo(a.slice(0, Math.floor(a.length/2)), val);
    } else {
      return searchAlgo(a.slice(Math.floor(a.length/2), a.length), val);
    }
  };

  return searchAlgo(arr, val)
};

console.log(binSearch(phonebook, 'phone', 29274704));