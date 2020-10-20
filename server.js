const express =require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");

const HALF_DAY = 1000 * 60 * 60 * 12;

const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sid",
    SESS_SECRET = "fullapp",
    SESS_LIFETIME = HALF_DAY
} = process.env; //porvjeriti gdje god da se pokrene moja 
//aplikacija vidjecu da li postoje ovakve neke varijable

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const IN_PROD = NODE_ENV == "production";

//omogucice nam da na samom requst objektu 
//imamo novi objekt session gdje mozemo da dodamo nesto
// i to je vidljivo u cijeloj nasoj aplikaciji
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret : SESS_SECRET,
    cookie : {
        maxAge : SESS_LIFETIME, //sesija traje 12h
        sameSite : true,
        secure : IN_PROD
    }
}))

app.set("view engine","ejs");

app.use("/",routes);

app.listen(3000, function(){
    console.log("Listening to port 3000");
})