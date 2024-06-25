
var search = require('node-modules');
var stream = search('test framework', {username:'mafintosh'});
 
stream.on('data', function(result) {
    console.log(result);
});
 
stream.on('end', function() {
    console.log('no more results');
});