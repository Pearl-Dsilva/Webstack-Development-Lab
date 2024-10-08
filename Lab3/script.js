var lat;
var long;
var timestamp;

'use strict'
window.onload= function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition,locationError);
    }
    else{
        displayError("Geolocation not available in browser.");
    }
};
function displayPosition(pos){
    document.getElementById("lat").innerHTML=pos.coords.longitude;
    document.getElementById("long").innerHTML=pos.coords.latitude;
    document.getElementById("timestamp").innerHTML=new Date(pos.timestamp);
}
function locationError(error){
    let message = "";
    console.log("error.message = "+error.message);
    switch(error.code){
        case error.PERMISSION_DENIED:
            message="Permission denied by user.";
            break;
        case error.POSITION_UNAVAILABLE:
            message="Unable to determine the location.";
        break;
        case error.TIMEOUT:
            message="There was a timeout.";
            break;
        case error.UNKNOWN_ERROR:
            message="Facing an unknown error.";
        break;
        
    }
    displayError(message);
}

function displayError(message){
    let element = document.getElementById("errorArea");
    element.classList.remove("d-none");
    element.innerHTML = message;
}

