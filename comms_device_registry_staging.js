// Test for comms-device-registry component in staging
// Only runs regression on all GET requests as we do not want to add and delete items.
// To execute type "node comms_device_registry_staging.js"
const newman = require('newman');
 
newman.run({
    // If running other tests, simply change the line below to the new collection name exported from postman
    // Wondering if below collection field can you a user input
    collection: 'CommsDeviceRegistryStaging.postman_collection.json',
    reporters:  ['cli-response','json-summary','html'],
        reporter:{
            html: {
                export: 'comms_device_registry_staging_results.html'
            }
        }
},function(err){
    if (err){throw err;}
    console.log('collecton run complete');
});