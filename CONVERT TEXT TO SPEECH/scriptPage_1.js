//Variables
const textarea = document.querySelector('#text');
let voicelist = document.querySelector('#voice');
let speechbtn = document.querySelector('.submit');
let synth = speechSynthesis;
let isSpeaking = true;

function voiceSpeech(){
    for(let voice of synth.getVoices()){
        let option = document.createElement('option');
        option.text = voice.name;
        voicelist.add(option);
        console.log(option);
    }
}

synth.addEventListener('voiceschanged', voiceSpeech);

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voicelist.value){
            utternance.voice = voice;
        }
    }
    speechSynthesis.speak(utternance);
}

speechbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(textarea.value != ''){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 1){
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechbtn.innerHTML = 'Pause';
            } else {
                synth.pause();
                isSpeaking = true;
                speechbtn.innerHTML = 'Resume';
            }
        setInterval(() => {
            if(!synth.speaking && !isSpeaking){
                isSpeaking = true;
                speechbtn.innerHTML = 'Convert to speech';
            }
        })
        } else {
            speechbtn.innerHTML = 'Convert to speech';
        }
    }
})