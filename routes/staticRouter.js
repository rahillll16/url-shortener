const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth");

const router = express.Router();

router.get('/admin/urls',restrictTo(["ADMIN"]) ,async (req,res) => {
    const allUrls = await URL.find({});
    return res.render("home.ejs",{
        urls: allUrls,
    });
});

router.get('/',restrictTo(["NORMAL","ADMIN"]) ,async (req,res) => {
    const allUrls = await URL.find({ createdBy: req.user._id});
    return res.render("home.ejs",{
        urls: allUrls,
    });
});

router.get('/signup',(req,res) =>{
    return res.render("signup.ejs");
});

router.get('/login',(req,res) =>{
    return res.render("login.ejs");
});

module.exports = router;