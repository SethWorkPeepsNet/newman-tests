// Seth Guimont
// Simple program that runs tests against all transmit service endpoints needed to test against

const newman = require('newman');
 
newman.run({
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