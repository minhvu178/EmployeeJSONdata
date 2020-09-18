var readFile = d3.json("employee.json");

var successRead = function(readFile)
{


 var section = d3.select(".employee")
    .selectAll("div")
    .data(readFile)
    .enter()
    .append("div")
 var general = section.append("div").attr('class', 'general')

    general.append("span").attr('class', 'name')
      .text(function(employee){return employee.firstName+ ' ' +employee.lastName;});
    

    general.append("img").attr('class', 'photo').attr("src", (function(employee){return employee.photo;}));
    
 var details = section.append("div").attr('class', 'detail')

    details.append("span").attr('class', 'title')
      .text(function(employee){return employee.title;});

    details.append("span").attr('class', 'unit')
      .text(function(employee){return employee.unit;});

    details.append("span").attr('class', 'email')
      .text(function(employee){return employee.email;});

    details.append("p").attr('class', 'bio')
      .text(function(employee){return employee.bio;});
}

var failRead = function(errorMsg)
{
console.log("Something went wrong", errorMSG);
}

readFile.then(successRead,failRead);