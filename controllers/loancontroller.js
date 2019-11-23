const express = require("express");
const router = express.Router();


const db = require("../models");

router.get("/loans", function(req, res) {
    db.Loans.findAll({
        include: [db.User],
        
    })
    .then(function(dbLoan) {
        var hbsObject = {
            loan: dbLoan
        };
        return res.render("index", hbsObject);
    });
});

router.post("/loan")