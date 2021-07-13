# Newman Component Tests
The purpose of this program is to quickly test the transmit service in a semi-automated fashion
To run you need
-Node version 10.48 or higher
-NPM
-NPM packages "newman" and "newman-reporter-html"
--Instructions on these Modules can be found here : https://www.npmjs.com/package/newman
-A Javascript IDE (Webstorm, Visual Studio Code) is recommended but not necessary

Assuming you are using Linux (can be WSL as well) after initializing the project simply navigate to the folder that the project resides and type "node theserviceyouwanttotest.js".  
All this will do for now is generate an HTML report that will confirm that the tests were run.

If you wish to run different tests that are not related to the transmit service you will have to retrieve a new json collection from postman.  To generate the JSON file, take existing tests and add them to a collection in postman and use the export button.  From there simply add that file to the parent directory

More functionality to come
