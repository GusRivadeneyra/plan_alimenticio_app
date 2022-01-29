const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};

const route = (url) => {
  switch (url) {
    case "/":
      return "./index.html";
    case "/menu":
      return "./index.html";
    case "/options":
      return "./index.html";
    case "/contacto":
      return "./index.html";
    default:
      return `.${url}`;
  }
};

http
  .createServer(function (request, response) {
    const filePath = route(request.url);
    console.log("filePath ", filePath);
    var extname = String(path.extname(filePath)).toLowerCase();

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          response.writeHead(404, { "Content-Type": "text/html" });
          fs.readFile("404.html", (err, fileContent) => {
            if (err) response.end("ya valioooooo", "utf-8");
            response.end(fileContent, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end("Erro inesperado: " + error.code + " ..\n");
        }
      } else {
        var contentType = mimeTypes[extname] || "application/octet-stream";
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8125);
console.log("Server running at http://127.0.0.1:8125/");
