// Definition einer Funktion, die eine Verzögerung simuliert
async function simuliereVerzoegerung(ms) {
  // Verzögerung um die angegebene Zeit in Millisekunden
  await new Promise(resolve => setTimeout(resolve, ms));
}

// Definition einer Funktion, die zwei Zahlen addiert, nach einer Verzögerung
async function addiereNachVerzoegerung(a, b, ms) {
  // Warten auf die Beendigung der Verzögerung
  await simuliereVerzoegerung(ms);
  // Durchführung der Addition nach der Verzögerung
  const sum = a + b;
  // Ausgabe der Summe in der Konsole
  console.log('Das Ergebniss ist ', sum);
}

// Aufruf der Funktion addiereNachVerzoegerung mit den Werten 2 und 3, nach einer Verzögerung von 1000 Millisekunden
addiereNachVerzoegerung(3, 7, 2000);