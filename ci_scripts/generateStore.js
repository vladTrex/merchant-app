const uuidv4 = require('uuid/v4');
const fs = require('fs');

const bids = [
  {id: 1, carTitle: 'Audi', amount: 12300},
  {id: 2, carTitle: 'Mercedes-Benz', amount: 23000},
  {id: 3, carTitle: 'Opel', amount: 5000},
  {id: 4, carTitle: 'Renault', amount: 5300},
  {id: 5, carTitle: 'Ferrari', amount: 15300},
  {id: 6, carTitle: 'Ferrari Enzo', amount: 16300},
  {id: 7, carTitle: 'Ferrari Modena 360', amount: 17300},
  {id: 8, carTitle: 'Citroen С4', amount: 17300},
];

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

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
  newItem.bids = bids.map(bid => {
    return Object.assign({}, bid, { 
      id: uuidv4(),
      created: randomDate(new Date(2018, 0, 1), new Date())
    });
  });
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
