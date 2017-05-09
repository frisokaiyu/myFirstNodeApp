/**
 * Created by tung on 2/05/17.
 */
/*
 *1. require the middleware and the selfdefined middleware
 */
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let session = require('express-session');
//use the module you customised,
let survey = require('./app/routes/survey.server.routes');
/*
 * 2. initial the app = express()
 */
let app = express();

/*
 * 3. give the variable
 *
 */
//The app.locals object is a JavaScript object,
// and its properties are local variables within the application.
app.locals.products=['iphone 7', 'huawei p9', 'Pixel XL', 'Samsung S7'];
app.locals.surveyresults = {
    fp:[0,0,0,0], mp:[0,0,0,0]
};
//set() Assigns setting name to value
app.set('views', path.join(__dirname,'/app/views'));//_dirname => pwd

/*
 * 4. app.use to apply functions
 */
//use express.static to collect the static source
//then u can access the static source,etc localhost:3000/css/surveystyle.css
//See at: http://www.expressjs.com.cn/starter/static-files.html
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret:'tu!HUbd&*nreA',
    cookie:{maxAge:1000*10}, //session age 10 seconds
    resave:false,
    saveUninitialized:false
}));
// use survey function(survey.server.routes) in the path：/
app.use('/', survey);

/*
 * 5. listen the port
 */
app.listen(3000, function () {
    console.log('survey app listening on port 3000!');
});