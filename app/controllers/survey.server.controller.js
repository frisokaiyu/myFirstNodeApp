/**
 * Created by tung on 2/05/17.
 */
// let express = require('express');
let count = require('./counter');

function showForm(req,res){
    products = req.app.locals.products;
    res.render('../views/survey.ejs',{products:products});
}
function showResult(req,res) {
    /*
     * Application scope data is available through out the application
     * Request scope data is available just to components handling the current request (controller, view, model)
     */
    console.log(req.body);
    console.log(count.count());
    let gender = req.body.gender;
    let productidx = req.body.vote;
    let products = req.app.locals.products;
    let surveyresults = req.app.locals.surveyresults;
    let sess = req.session;
    if ("vote" in sess) {
        console.log("opertate too quik");
        res.render("surveyresult.ejs", {
            products: products,
            surveyresults: surveyresults
        });
    } else {
        sess.vote = productidx;
        if (gender === '0')
            surveyresults.mp[productidx]++;
        else
            surveyresults.fp[productidx]++;
        res.render("surveyresult.ejs", {
            products: products,
            surveyresults: surveyresults
        });
    }
}
/*
 * module.exports and exports are equivalent,
 * both referring to the object exposed by the module
 */
module.exports = {
    showForm:showForm,
    showResult:showResult
}

