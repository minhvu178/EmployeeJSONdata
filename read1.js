var readFile = d3.json("employee.json");

var successRead = function(readFile)
{
console.log("Data collected", readFile);
}

var failRead = function(errorMsg)
{
console.log("Something went wrong", errorMSG);
}


readFile.then(successRead,failRead);