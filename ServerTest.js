"use strict";
exports.__esModule = true;
// Node-Http-Modul importieren
var Http = require("http");
// Node-Url-Modul importieren
var Url = require("url");
var ServerTest;
(function (ServerTest) {
    // Port vom Process-Objekt erfragen
    var port = process.env.PORT;
    // Port nicht definiert -> lokale Maschine, Port selbst definieren
    if (port == undefined)
        port = 8100;
    // Server-Objekt kreieren
    var server = Http.createServer();
    // Event-Handler installieren
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    // Auf dem Port horchen
    server.listen(port);
    // Listening-Event: Rückmeldung wenn horchen läuft
    function handleListen() {
        console.log("Server listening on port " + port);
    }
    // Request-Event: Verarbeiten der Request und erstellen der Response
    function handleRequest(_request, _response) {
        console.log("Eine Bestellung ist eingegangen");
        // Header: Antwort kommt im HTML-Format mit uft-8
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // Header: ?
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Response-Body
        _response.write("Deine Weihnachtsbaumbestellung: <br>");
        // ?
        var query = Url.parse(_request.url, true).query;
        // ?
        _response.write('<ul>');
        for (var key in query)
            _response.write('<li>' + key + ": " + query[key] + '</li>');
        _response.write('</ul>');
        // Antwort abschließen und abschicken
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map