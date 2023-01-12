function processSpeech(text) {
  // Utilizza il testo riconosciuto per elaborare la richiesta dell'utente
  if (text.includes("Ciao")) {
    // Genera una risposta vocale di saluto
    var response = "Ciao, Come posso aiutarti?";
  } else if (text.includes("ora")) {
    // Genera una risposta vocale con l'ora corrente
    var response = "Sono le ore: " + new Date().toLocaleTimeString();
  } else if (text.includes("youtube")) {
    // Apre un link a youtube
    window.open("https://www.youtube.com");
    var response = "Aprendo YouTube...";
  } else {
    // Genera una risposta vocale di default
    var response = "Scusa, non ho capito la tua richiesta.";
  }

  // Crea un'istanza di SpeechSynthesis per sintetizzare la voce
  var synth = window.speechSynthesis;

  // Crea un'istanza di SpeechSynthesisUtterance per specificare il testo da sintetizzare
  var utterance = new SpeechSynthesisUtterance(response);

  // Utilizza il metodo speak() per riprodurre la risposta
  synth.speak(utterance);
}
