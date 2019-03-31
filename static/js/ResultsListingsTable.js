//Get data to be displayed in the table
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

//event listener 

//on Button click event
findPetButton.on("click", function () {

    console.log("Animal Type is " + animalType.property("value"));
    console.log("Breed Type is " + breedName.property("value"));
    console.log("zipcode is " + zipcode.property("value"));


    //refresh table
    tbody.html(' ');


    d3.json(url).then(function (data) {



        // var columns = Object.keys(sample[1]);

        // console.log(columns);
        // console.log("Keys");
        // console.log(Object.keys(sample[1]));
        // console.log("values");
        // console.log(Object.entries.value);


        // //prevent the page from refreshing
        // d3.event.preventDefault();

        //REFRESH table



        var zipcode_value = zipcode.property("value");

        //Add row elements
        data.forEach((pet) => {

            //check for zipcode
            if (pet["postcode"] == zipcode_value) {

                //row header
                var row = tbody.append("tr").attr("id", "rowData");

                //cell data
                var cell = row.append("td").attr("id", "cellData");
                cell.append("img").attr("src", pet["photo1"]).attr("height", "120").attr("width", "120");


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


                // row.append("td").attr("id", "cellData").text(pet["state"]);  //location

                // var cellURL = row.append("td").attr("id", "cellData"); //URL
                // cellURL.append("a").attr("id", "URL").attr("href", pet["url"]).text("Visit Page");

                // Object.entries(pet).forEach(([key, value]) => {
                //     // if (key ==)
                //     var cell = row.append("td").attr("id", "cellData");
                //     cell.text(value);
                // });
            }
            // else {

            //     //populate every result
            //      //row header
            //      var row = tbody.append("tr").attr("id", "rowData");



            //      //cell data
            //      var cell = row.append("td").attr("id", "cellData");
            //      cell.append("img").attr("src", pet["photo1"]).attr("height", "120").attr("width", "120");


            //      row.append("td").attr("id", "cellData").text(pet["age"]); //age
            //      row.append("td").attr("id", "cellData").text(pet["gender"]); //gender
            //      row.append("td").attr("id", "cellData").text(pet["size"]); //size
            //      row.append("td").attr("id", "cellData").text(pet["type"]); //type
            //      row.append("td").attr("id", "cellData").text(pet["primary breed"]); //primary_breed
            //      row.append("td").attr("id", "cellData").text(pet["secondary breed"]); //secondary_breed
            //      row.append("td").attr("id", "cellData").text(pet["mixed breed"]);   //mixed_breed

            //      row.append("td").attr("id", "cellData").text(pet["address"]);  //location
            //      row.append("td").attr("id", "cellData").text(pet["city"]);  //location
            //      row.append("td").attr("id", "cellData").text(pet["state"]);  //location
            //      row.append("td").attr("id", "cellData").text(pet["postcode"]);  //location
            //      row.append("td").attr("id", "cellData").text(pet["phone"]);  //location

            // }


        });



    });



});



