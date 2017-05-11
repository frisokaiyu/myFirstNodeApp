/**
 * Created by tung on 10/05/17.
 */
let express = require("express");
let controller = require("../controllers/revision.server.controller");

let router = express.Router();

router.get("/revision",controller.showTitleForm); //url path
router.get("/revision/getLatest", controller.getLatest);//url path
module.exports = router;