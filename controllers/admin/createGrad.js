const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi"]);

const createGrad = (req,res) =>{
    let name = req.body.name;
    let zip = req.body.zip;

    db.gradovi.insert({name: name, zip: zip}, (err,docs) =>{
        //check for error
        res.redirect("/admin");
    })
}


module.exports = createGrad;