const mongojs = require("mongojs");
const db = mongojs("fullapp", ["proizvodi"]);


const deleteProizvodController = (req,res) =>{
    let proizvodId = req.params.proizvodId;

    db.proizvodi.remove({_id:mongojs.ObjectID(proizvodId)}, (err,docs) =>{
        res.send("Ok")
    })
}

module.exports = deleteProizvodController;