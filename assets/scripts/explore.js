// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 // explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  var image = document.querySelector('img[alt="Smiling face"]');

  function populateVoiceList() {
    let voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + '(' + voices[i].lang + ')';
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  button.addEventListener('click', function(){
    const speech = textInput.value;
    const chosenVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');


    if(speech != '' && chosenVoice != null){
      const utterThis = new SpeechSynthesisUtterance(textInput.value);
      let voices = speechSynthesis.getVoices();
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === chosenVoice) {
          utterThis.voice = voices[i];
        }
      }

      utterThis.onstart = function(event){
        image.src = 'assets/images/smiling-open.png';
      };

      utterThis.onend = function(event){
        image.src = 'assets/images/smiling.png';
      };

      speechSynthesis.speak(utterThis);

    }
    
    else{
      alert('ERROR: No input found and/or no voice was selected');
    }

  });
}
}