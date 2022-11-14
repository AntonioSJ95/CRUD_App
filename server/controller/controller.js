var Userdb = require('../model/model');

//create and save new user

exports.create = (req,res) =>{
    //Validate the request
    if(!req.body){
        res.status(400).send({message: "Content cant not be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //Store data in DB
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user"
            });
        });
}

//return all users or a single user
exports.find = (req,res) =>{
    
}


//Update user
exports.update = (req,res) =>{
    
}

//Delete
exports.delete = (req,res) =>{
    
}