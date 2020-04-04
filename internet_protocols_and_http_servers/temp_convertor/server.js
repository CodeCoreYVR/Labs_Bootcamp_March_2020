const http = require('http');
const url = require('url');

// the client for this is the browser.
// first run the server: node server.js
// then enter the example below into the web browser.
//
// Example usage: In the browser, go to the following URL
// http://localhost:8080/?temp=100
//
// The code below will convert 100 degrees Fahrenheit to Celsius
// and then responds to the browser with an hmtl formatted string with the
// converted temperature

const server = http.createServer((request, response) => {
  /*
    The url is going to pass parameters to the server. In this case, one called
    temp with the value of 100, using the eample from above).
    The params need to be parsed out of the `request.url`.
    This is done using the `url.parse` function.
    This function returns an object.
    One of the keys of this object is `query` whose value is another object,
    key-value pairs of the params sent in the url.
      In this case:
          query === {temp: 100}
  */
  const params = url.parse(request.url, true).query;
  let f = parseFloat(params.temp);
  let c = (f - 32) * 5 / 9;
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Temperature Converter</title>
      </head>
      <body>
        <h1>${f}&deg;F is ${c}&deg;C</h1>
      </body>
    </html>`
  );
  response.end();
});

server.listen(8080);
console.log('The server is listening on 8080');
