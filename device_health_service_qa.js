// Seth Guimont
// Simple program that runs tests against all device-health-service endpoints needed to test against
// The validation this provides is not fully fleshed out, I get 200 status codes in htmll report
// However I cannot validate in TDMG, further research is needed.
const newman = require('newman');
 
newman.run({
    // If running other tests, simply change the line below to the new collection name exported from postman
    // Wondering if below collection field can you a user input
    collection: 'devicehealthserviceqa.postman_collection.json',
    reporters:  ['cli-response','json-summary','html'],
        reporter:{
            html: {
                export: 'results.html'
            }
        }
},function(err){
    if (err){throw err;}
    console.log('collecton run complete');
});
