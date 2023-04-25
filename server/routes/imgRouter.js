
const express = require('express');
const router = express.Router();
const {upload} = require("../middleware/uploadImg");
const {saveImg,getImg}=require("../controllers/imgControllers")


router.get('/',getImg)

router.post("/upload",upload.single('image'), saveImg);




module.exports = router;
