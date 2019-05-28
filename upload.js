const express = require('express');
const router = express.Router();

const multer = require("multer");

let upload = multer({
  dest: "upload/"
})


// 뷰 페이지 경로
router.get('/show', function(req, res, next) {
  res.render("board.ejs")
});





module.exports = router;
