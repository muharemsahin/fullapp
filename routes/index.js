const express = require("express");
const { route } = require("./home");
const router = express.Router();


router.use("/", require("./home"));

router.use("/login", require("../controllers/loginController"))


router.use("/admin", require("./admin"))
 
router.use("/operater", require("./operater"));

router.use("/savjetnik", require("./savjetnik"));

router.use("/logout",require("./logout"))

module.exports = router;