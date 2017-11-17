const animals = require('./../controllers/animals');

module.exports = (app)=>{
    app.get('/animals', animals.index);
    app.post('/animals', animals.create);
}
