// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  var audio = document.querySelector("audio");
  var button = document.querySelector("button");
  var isPartyHorn = false;
  document.getElementById("horn-select").addEventListener("change", function() {
    var selectedOption = this.value;
    var imageUrl;
    var audioUrl;
  
    switch(selectedOption) {
        case "air-horn":
            imageUrl = "assets/images/air-horn.svg"; 
            audioUrl = "assets/audio/air-horn.mp3";
            isPartyHorn = false;
            break;
        case "car-horn":
            imageUrl = "assets/images/car-horn.svg"; 
            audioUrl = "assets/audio/car-horn.mp3";
            isPartyHorn = false;
            break;
        case "party-horn":
            imageUrl = "assets/images/party-horn.svg"; 
            audioUrl = "assets/audio/party-horn.mp3";
            isPartyHorn = true;
            break;
        default:
            imageUrl = "assets/images/no-image.png";
            isPartyHorn = false;
    }
    document.querySelector("#expose img").src = imageUrl;
    audio.src = audioUrl;
  });
  button.addEventListener("click", function() {
    audio.play(); 
    if(isPartyHorn == true){
      jsConfetti.addConfetti();
    }
  });
  document.getElementById("volume").addEventListener("change", function() {
    var volumeLevel = this.value / 100;
    var volumeImg;
  
    switch(true) {
        case volumeLevel === 0:
            volumeImg = "assets/icons/volume-level-0.svg"; 
            break;
        case volumeLevel < 0.33:
            volumeImg = "assets/icons/volume-level-1.svg"; 
            break;
        case volumeLevel < 0.67:
            volumeImg = "assets/icons/volume-level-2.svg"; 
            break;
        default:
            volumeImg = "assets/icons/volume-level-3.svg";
    }
    document.querySelector("#volume-controls img").src = volumeImg;
    audio.volume = volumeLevel;
  });
}