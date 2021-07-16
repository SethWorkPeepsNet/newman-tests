// Only GET requests
// Two Negative POST will both give 400 status codes
const newman = require('newman');
 
newman.run({
    // If running other tests, simply change the line below to the new collection name exported from postman
    // Wondering if below collection field can you a user input
    collection: 'DeviceImportServiceQA.postman_collection.json',
    reporters:  ['cli-response','json-summary','html'],
        reporter:{
            html: {
                export: 'DeviceImportServiceQAResults.html'
            }
        }
},function(err){
    if (err){throw err;}
    console.log('collecton run complete');
});