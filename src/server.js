var config = require('./config');
var restify = require('restify');
var http = require('follow-redirects').http;
import uuid from 'node-uuid';
var server = restify.createServer();

server.use(restify.CORS());
server.use(restify.bodyParser({ mapParams: true }));

server.get('/statuses', function (req, res) {
    console.log("Serving statuses...");
    var data = [
        {text: "Janimatti Ellonen", uuid: uuid.v4()},
        {text: "Steve Moses", uuid: uuid.v4()},
    ];

    res.charSet('utf8');
    res.send(200, data);
});

server.get('/players', function (req, res) {
    var data = [
        {name: "Janimatti Ellonen", uuid: uuid.v4()},
        {name: "Ville Mikkola", uuid: uuid.v4()},
        {name: "Tomi Kulmala", uuid: uuid.v4()},
        {name: "Mikko Juola", uuid: uuid.v4()},
    ];

    res.charSet('utf8');
    res.send(200, data);
});

server.listen(config.server.port, function() {
    console.log('%s listening at %s', server.name, server.url);
});

export default server;
