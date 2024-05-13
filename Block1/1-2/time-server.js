// Importieren des 'net' Moduls, das für das Erstellen des TCP-Servers verwendet wird
const net = require('net')

// Funktion zum Hinzufügen einer führenden Null, wenn eine Zahl kleiner als 10 ist
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

// Funktion zum Erstellen des aktuellen Datums und der aktuellen Uhrzeit im geforderten Format
function now () {
  const d = new Date()
  return d.getFullYear() + '-' +                         // Jahr
    zeroFill(d.getMonth() + 1) + '-' +                  // Monat (0-based)
    zeroFill(d.getDate()) + ' ' +                        // Tag
    zeroFill(d.getHours()) + ':' +                       // Stunden
    zeroFill(d.getMinutes())                             // Minuten
}

// Erstellen des TCP-Servers, der auf Verbindungen auf dem angegebenen Port hört
const server = net.createServer(function (socket) {
  // Schreiben des aktuellen Datums und der aktuellen Uhrzeit an den Socket und Beenden der Verbindung
  socket.end(now() + '\n')
})

// Starten des Servers auf dem angegebenen Port, der als erstes Befehlszeilenargument übergeben wird
server.listen(Number(process.argv[2]))