var readFile = d3.json("employee.json");

var successRead = function(readFile)
{

    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(readFile)
    .enter()
    .append("tr");


    rows.append("td")
      .text(function(employee){return employee.firstName;});

    rows.append("td")
      .text(function(employee){return employee.lastName;});

    rows.append("td")
      .append("img").attr("src", (function(employee){return employee.photo;}));

    rows.append("td")
      .text(function(employee){return employee.title;});

    rows.append("td")
      .text(function(employee){return employee.unit;});

    rows.append("td")
      .text(function(employee){return employee.email;});

    rows.append("td")
      .text(function(employee){return employee.bio;});
}

var failRead = function(errorMsg)
{
console.log("Something went wrong", errorMSG);
}

readFile.then(successRead,failRead);
