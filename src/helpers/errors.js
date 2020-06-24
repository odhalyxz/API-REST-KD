const errorDict = require('../errorDictionary.json');


function createError(id = "api-kdramas 000") {

    const error = new Error(errorDict[id].message);
    error.id = errorDict[id].id;
    //error.name = errorDict[id].name  + ", "+ "error: "+ error.id + "\n";
    error.name = "Warning: "+ error.id;
    return error;
}

module.exports = createError;