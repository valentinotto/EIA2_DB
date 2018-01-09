"use strict";
exports.__esModule = true;
var Http = require("http");
var ServerTest;
(function (ServerTest) {
    var port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    var server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleListen() {
        console.log("Server listening");
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write("Ich höre<br> Stimmen  !!!");
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map