const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const savjetnikController = (req,res) =>{
    let user = req.session.user;
    console.log(user);
    db.termini.find({savjetnik: user.first_name +" "+user.last_name, active: true}, (err,termini) =>{
        console.log(user);
        res.render("savjetnik/index", {
            name : req.session.user.first_name,
            termini: termini
        });
    })

  
}

module.exports =  savjetnikController;
