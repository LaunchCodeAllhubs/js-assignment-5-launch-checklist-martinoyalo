// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let info = document.getElementById("missionTarget")
    info.innerHTML = 
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
}



function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    } else if(isNaN(testInput)){
        return "Not a Number";
    } else if(!isNaN(testInput)){
        return "is a Number";
    }
       
    
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pStatus = document.getElementById("pilotStatus")
    let cpStatus = document.getElementById("copilotStatus")
        if(validateInput(pilot) == "Empty" || validateInput(pilot) == "is a Number"){
           return alert("pilot name required")} else {pStatus.innerText = `${pilot} is ready`}
        if(validateInput(copilot) == "Empty" || validateInput(copilot) == "is a Number"){
            return alert("copilot name required")} else {cpStatus.innerText = `${copilot} is ready`}
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")
    
    if((validateInput(fuelLevel) == "Not a Number") || validateInput(fuelLevel) == "Empty"){
           return alert("fuel number required")} else if(fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerText = "Not enough fuel for launch";
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = 'red';
    }
    if((validateInput(cargoLevel) == "Not a Number") || validateInput(cargoLevel) == "Empty"){
       return alert("cargo number required")} else if(cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerText = "Too much mass for the shuttle to take off";
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
    }
    if(cargoLevel < 10000 && fuelLevel > 10000){
        launchStatus.innerText = "Shuttle ready for launch";
        launchStatus.style.color = "#419F6A";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
   randPlanet = Math.floor(Math.random()*planets.length)
   return planets[randPlanet];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
