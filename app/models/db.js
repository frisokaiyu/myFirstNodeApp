/**
 * Created by tung on 10/05/17.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wikipedia', function () {
    console.log('mongodb connected')
})

module.exports = mongoose;