const uuidv4 = require('uuid/v4');
const fs = require('fs');

const source = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    isPremium: false,
    phone: '3233231212',
    bids: [],
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@gmail.com',
    isPremium: false,
    phone: '3233231212',
    bids: [],
  },
  {
    firstName: 'Otto',
    lastName: 'Dix',
    email: 'otto.dix@gmail.com',
    isPremium: false,
    phone: '3233231212',
    bids: [],
  },
  {
    firstName: 'Barak',
    lastName: 'Obama',
    email: 'barak.obama@gmail.com',
    isPremium: false,
    phone: '3233231212',
    bids: [],
  },
  {
    firstName: 'Alex',
    lastName: 'Doe',
    email: 'alex.doe@gmail.com',
    isPremium: false,
    phone: '3233231212',
    bids: [],
  },
];

console.log('-- Start generate store --');
console.log(uuidv4());

const merchants = source.map(item => {
  const newItem = Object.assign({}, item, { id: uuidv4() });
  console.log(newItem);
  return newItem;
});

const store = { merchants: merchants };

fs.writeFile(
  './dist/store.json',
  JSON.stringify(store, null, 4),
  'utf8',
  function(err) {
    if (err) throw err;
    console.log('-- Store was generated --');
  }
);
