const http = require('http'); 
const axios = require('axios');
const host = '0.0.0';
const port = 8000;
const options = {
    hostname: host, // Replace with the hostname you want to request
    port: port, // Use the appropriate port (80 for HTTP)
    path: '/', // The path you want to request
    method: 'GET' // HTTP method (GET, POST, etc.)
  };
  
  const req = http.request(options, response => {
    let data = '';
  
    // Handle incoming data
    response.on('data', chunk => {
      data += chunk;
    });
  
    // Handle the end of the response
    response.on('end', () => {
      console.log(data); // Log the complete response data
    });
  });
  
  // Handle errors during the request
  req.on('error', error => {
    console.error('Request error:', error);
  });
  
  // Send the request
  req.end();