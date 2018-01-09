import * as Http from "http";



namespace ServerTest {

  let server: Http.Server = Http.createServer();
  server.addListener("Listening", handleListen);
  server.addListener("request", handleRequest);
  server.listen(8100);


function handleListen() :void {
  console.log("Listening")
}

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse) :void {
    console.log("Ich höre stimmen");
    _response.setHeader("content-type", "text/html ; charset= utf-8");
    _response.write("Ich höre Stimmen!")
    _response.end();
  }
}
