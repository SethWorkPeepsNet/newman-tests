// Seth Guimont
// Simple program that runs tests against all transmit service endpoints needed to test against

const newman = require('newman');
 
newman.run({
    // If running other tests, simply change the line below to the new collection name exported from postman
    collection: 'TranmitService.postman_collection.json',
    reporters:  'html',
        reporter:{
            html: {export: 'results.html'
            }
        }
},function(err){
    if (err){throw err;}
    console.log('collecton run complete');
});