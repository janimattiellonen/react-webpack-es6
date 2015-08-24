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

server.get('/courses', function(req, res) {
    var data = [
        {value: "10", label: "Tali", par: 57, length: 1334, holes: 18},
        {value: "405", label: "Kivikko", par: 56, length: 1250, holes: 18 },
        {value: "340", label: "Oittaa" , par: 45, length: 900, holes: 12},
        {value: "73", label: "Siltamäki", par: 56, length: 1100, holes: 18 },
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
