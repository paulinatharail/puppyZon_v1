const url = `listings`;

const findPetButton = d3.select('#FindPet');


var animalType = d3.select('#animalType'); //.property("value");
// var animalType2 = Document.getElementById('animalType');


//BreedName
var breedName = d3.select('#BreedName'); //.property("value");
//zipcode
var zipcode = d3.select('#zipcode');// .property("value");


// console.log("Animal Type is " + animalType2);


//Get reference to Table div placeholder
var table = d3.select("#table-data").append('table').attr("class", "table table-striped");
var thead = table.append('thead')
var tbody = table.append('tbody');


// debugger;
var columns = ['Photo', 'Age', 'Gender',
    'Size', 'Type',
    'Primary Breed', 'Secondary Breed',
    'Mixed Breed', 'Address', 'City', 'State', 'Postcode', 'Phone'];

// append the header row
thead.append('tr')
    .selectAll('th')
    .data(columns).enter()
    .append('th')
    .text(function (column) { return column; });


function populateTable(pet) {
    console.log("inside populate table");
    console.log(pet);

   

    //row header
    var row = tbody.append("tr").attr("id", "rowData");

    //cell data
    var cell = row.append("td").attr("id", "cellData");
    cell.append("img").attr("src", pet["photo1"]).attr("height", "120").attr("width", "120");

    console.log("pet age: "+ pet["age"]);
    row.append("td").attr("id", "cellData").text(pet["age"]); //age
    row.append("td").attr("id", "cellData").text(pet["gender"]); //gender
    row.append("td").attr("id", "cellData").text(pet["size"]); //size
    row.append("td").attr("id", "cellData").text(pet["type"]); //type
    row.append("td").attr("id", "cellData").text(pet["primary breed"]); //primary_breed
    row.append("td").attr("id", "cellData").text(pet["secondary breed"]); //secondary_breed
    row.append("td").attr("id", "cellData").text(pet["mixed breed"]);   //mixed_breed

    row.append("td").attr("id", "cellData").text(pet["address"]);  //location
    row.append("td").attr("id", "cellData").text(pet["city"]);  //location
    row.append("td").attr("id", "cellData").text(pet["state"]);  //location
    row.append("td").attr("id", "cellData").text(pet["postcode"]);  //location
    row.append("td").attr("id", "cellData").text(pet["phone"]);  //location

    
};