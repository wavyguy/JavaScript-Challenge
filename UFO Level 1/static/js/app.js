// from data.js
var tableData = data;

// Table Body 
var tbody = d3.select("tbody");

// Data in console.log
console.log(data);

// Function to Loop Through Data and Append to Table 
function ufoData(data){ 
    tbody.text("")
    data.forEach(function(ufoReport){
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);	
    })
})};

ufoData(tableData);

// Navigate Date/Time Columns 
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
});

// Function for User Input 
var inputText = d3.select("#datetime");
var button = d3.select("filter-btn");

function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var filtered_table = tableData.filter(ufoReport => ufoReport.datetime===inputText.property("value"));
    ufoData(filtered_table);
};

// User Date 
inputText.on("change", changeHandler);
button.on("click", changeHandler);