const axios = require('axios');

exports.homeRoutes = (req,res) => {
    //Creating a get request to /api/users
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        res.render('index', {users:response.data});
    })
    
    
}

exports.add_user = (req,res) => {
    res.render('add_user');
}

exports.update_user = (req,res) => {
    res.render('update_user');
}