What are server-sent events
Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. 
These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc
if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  }



  
What are the events available for server sent events

onopen--- it is used when a connection to the server is opened 
onmessage---this event is used when a mesage is receive
onerror----it is used if there is an error in communication with the server

