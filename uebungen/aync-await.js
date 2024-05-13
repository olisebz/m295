/*Erstellen Sie eine asynchrone Funktion, die zwei Zahlen nach einer simulierten Verzögerung addiert und das Ergebnis ausgibt.

Schreiben Sie eine asynchrone Funktion simuliereVerzoegerung(ms).
Die Funktion soll eine Verzögerung von ms Millisekunden simulieren.
Schreiben Sie eine asynchrone Funktion addiereNachVerzoegerung(a, b, ms).
Schreiben Sie eine asynchrone Funktion addiereNachVerzoegerung(a, b, ms).
Die Funktion soll nach der Verzögerung `a` und `b` addieren und das Ergebnis ausgeben. */

async function simuliereVerzoegerung(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function addiereNachVerzoegerung(a, b, ms) {
  await simuliereVerzoegerung(ms);
  const sum = a + b;
  console.log("Das Ergebniss ist ", sum);
}

addiereNachVerzoegerung(3, 7, 2000);
