
    function readTextInSpanish(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'es-ES'; // Sæt til spansk (Spanien) eller en anden variant
    window.speechSynthesis.speak(speech);
}

    document.getElementById('speakButton').addEventListener('click', function() {
    const text = document.getElementById('textToRead').innerText;
    readTextInSpanish(text);
});
