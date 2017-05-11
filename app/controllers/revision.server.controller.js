/*
 * Created by tung on 10/05/17.
 */
let Revision = require("../models/revision");

module.exports.showTitleForm=function(req,res){
	res.render("../views/titleForm.pug")
}

module.exports.getLatest=function(req,res){
	title = req.query.title;

	Revision.findTitleLatestRev(title, function(err,result){
		
		if (err){
			console.log("Cannot find " + title + ",s latest revision!")
		}else{
			console.log(result)
			revision = result[0]
			res.render('revision.pug',{title: title, revision:revision})
		}	
	})	

}
