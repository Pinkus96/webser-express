const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": `application/json` });
    let salida = {
        nombre: "mario",
        ocupacion: "gammer",
        nivel: "muy largo",
        id: 1364,
        fin: "ejem",
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write("Hola Mundo");
    res.end();
}).listen(8080);

console.log("Escuchando el puerto 8080");