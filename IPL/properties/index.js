const csv= require('csvtojson');
const fs=require('fs').promises;
async  function convertCSVToJSON(inputFilePath,outPutFilePath) {
    let jsonFile=await csv().fromFile(inputFilePath);
    await fs.writeFile(outPutFilePath, JSON.stringify(jsonFile, null, 4));
}
const csvFilePathForMatches='./properties/matches.csv';
const jsonFilePathForMatches='./properties/matches.json';
const csvFilePathForDeliveries='./properties/deliveries.csv';
const jsonFilePathForDeliveries='./properties/deliveries.json';
//promis used to when two asyns functions to run parellaly
function convertToJSON() {
    return Promise.all(
        [
            convertCSVToJSON(csvFilePathForMatches, jsonFilePathForMatches),
            convertCSVToJSON(csvFilePathForDeliveries, jsonFilePathForDeliveries)
        ]
    )
}
 convertToJSON()