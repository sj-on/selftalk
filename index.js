const btn = document.querySelector('.talk');
const content = document.querySelector('.repeat');

const sr = window.SpeechRecognition || window.webkitSpeechRecognition ;
const recognition = new sr();

recognition.onstart = function(){
    console.log('Start Talking Kid!');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
};

btn.addEventListener('click', () => {
    recognition.start();
});

function nowIWillTalk(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1.25;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}