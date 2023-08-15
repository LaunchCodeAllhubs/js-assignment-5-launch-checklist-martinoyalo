
//const { formSubmission } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
       let pilotName1 = document.querySelector("input[name=pilotName]").value;
       let copilotName1 = document.querySelector("input[name=copilotName]").value;
       let fuelLevel1 = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel1 = document.querySelector("input[name=cargoMass]").value;
       let faultyItems1 = document.getElementById("faultyItems");
       faultyItems1.visibility = "invisible";
       if (pilotName1 === "" || copilotName1 === "" || fuelLevel1 === "" || cargoLevel1 === "") {
          alert("All fields are required!");
         
       }
       formSubmission(document, faultyItems1, pilotName1, copilotName1, fuelLevel1, cargoLevel1)
    });
    
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let assignedPlanet = pickPlanet(listedPlanets)
       addDestinationInfo(document, assignedPlanet.name, assignedPlanet.diameter, assignedPlanet.star, assignedPlanet.distance, assignedPlanet.moons, assignedPlanet.image)
   })
 });

