const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports = {
    index: (req, res)=>{
        Animal.find({}, (animal, err)=>{
            if(animal){
                console.log(animal);
                res.json(animal)
            } else {
                console.log(err);
                res.json(err);
            }
        })
    },
    create: (req, res)=>{
        console.log('the body is:', req.body);
        const animal = new Animal(req.body);
        animal.save((err)=>{
            if(err){
                console.log(err);
                res.send(err);
            }
            // return the animal created
            res.send(animal);
        })
    }
}
