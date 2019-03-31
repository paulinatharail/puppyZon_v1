// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'

var buttonClickedTimes = 0;
var myMap;

//on Button click event
findPetButton.on("click", function () {
  buttonClickedTimes = buttonClickedTimes + 1;
  if (buttonClickedTimes > 1) {
    //clear the map
    // myMap.off();
    // myMap.remove();

    //refresh table
    tbody.html(' ');

  }





  var zipcode_value = zipcode.property("value");



  d3.json(url).then(function (data) {

    var listResults = [];



    //filter and package results
    data.forEach(pet => {
      // L.marker([pet['Lat'], pet['Lng']])
      //   .bindPopup("<h4>Breed: </h4>" + pet["primary breed"] + "<br> <h4>Gender: </h4>" + pet["gender"] + "<br> <h4>Age: </h4>" + pet["age"])
      //   .addTo(myMap);


      if (pet["postcode"] == zipcode_value) {
        // var item = {};
        // item['Lat'] = pet['Lat'];
        // item['Lng'] = pet['Lng'];
        // item['Breed'] = pet['primary breed'];
        // item['Gender'] = pet['gender'];
        // item['Age'] = pet['age'];


        // item['size'] = pet['size'];
        // item['type'] = pet['type'];
        // item['secondary breed'] = pet['secondary breed'];
        // item['mixed breed'] = pet['mixed breed'];
        // item['address'] = pet['address'];



        // item['city'] = pet['city'];
        // item['state'] = pet['state'];
        // item['postcode'] = pet['postcode'];
        // item['phone'] = pet['phone'];



        listResults.push(pet);

        populateTable(pet);

      }




    });


    myMap = L.map("mapid", {
      //center: [data[0]['Lat'], data[0]['Lng']],
      center: [listResults[0]['Lat'], listResults[0]['Lng']],
      zoom: 5
    });



    //add markers for each pet location
    listResults.forEach(pet => {
      L.marker([pet['Lat'], pet['Lng']])
        .bindPopup("<h4>Breed: </h4>" + pet["primary breed"] + "<br> <h4>Gender: </h4>" + pet["gender"] + "<br> <h4>Age: </h4>" + pet["age"]+ "<br> <h4>zipcode: </h4>" + pet["postcode"])
        .addTo(myMap);
    });




  });


});