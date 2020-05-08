var models = require('./server.js').models;
/*
var toSave = [
    {name: 'Dika1', email: 'dika1@gmail.com'},
    {name: 'Dika2', email: 'dika2@gmail.com'},
    {name: 'Dika3', email: 'dika3@gmail.com'},
    {name: 'Dika4', email: 'dika4@gmail.com'},
    {name: 'Dika5', email: 'dika5@gmail.com'},
    {name: 'Dika6', email: 'dika6@gmail.com'},
    {name: 'Dika7', email: 'dika7@gmail.com'},
    {name: 'Dika8', email: 'dika8@gmail.com'},
    {name: 'Dika9', email: 'dika9@gmail.com'},
    {name: 'Dika10', email: 'dika10@gmail.com'},
    {name: 'Dika11', email: 'dika11@gmail.com'},
    {name: 'Dika12', email: 'dika12@gmail.com'},
];

toSave.map(obj => {
  models.Profile.create(obj, (err, cerated) => {
    console.log('Created?', cerated);
  });
});
*/

var filter = {
  where: {
    username: { like: 'kokodika' },
  }, // Kind of liek MySql Where Clause
  order: 'id ASC',
  limit: 10,
  skip: 0,
  fields: {
    email: true,
  },
};

/*include: {
  relation: 'Posts',
  scope: {
    limit: 5,
    order: 'date DESC',
    include: {
      relation: 'Image',
      limit: 1,
      where: {type: 'thumbnail'},
    },
  },
},
};
*/

models.Profile.destroyById("5eb587838faff848b6552eb4", (err, found) => {
  console.log('Found?', err, found);
});
