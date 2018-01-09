"use strict";
exports.__esModule = true;
var Http = require("http");
var ServerTest;
(function (ServerTest) {
    var server = Http.createServer();
    server.addListener("Listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(8100);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre stimmen");
        _response.setHeader("content-type", "text/html ; charset= utf-8");
        _response.write("Ich höre Stimmen!");
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=test.js.map