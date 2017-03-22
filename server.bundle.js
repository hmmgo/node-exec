/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// consts
// Import node module
var router = _express2.default.Router();
var requests = _request2.default;

// premier table title and data variable.
var gameData = '';
var gameTitle = '';

// fetch JSON data from api and assign to variable.
requests.get('http://api.football-data.org/v1/competitions/426/leagueTable', function (error, response, body) {

    var datas = JSON.parse(body);
    gameTitle = datas.leagueCaption;

    for (var i = 0; i < datas.standing.length; i++) {
        gameData += '<tr> <th scope="row">' + datas.standing[i].position + '</th><td><img width="20px" src=" ' + datas.standing[i].crestURI + '"> ' + datas.standing[i].teamName + '</td> <td>' + datas.standing[i].playedGames + '</td><td>' + datas.standing[i].wins + '</td><td>' + datas.standing[i].draws + '</td><td>' + datas.standing[i].losses + '</td><td>' + datas.standing[i].goals + '</td><td>' + datas.standing[i].goalsAgainst + '</td><td>' + datas.standing[i].goalDifference + '</td><td><strong>' + datas.standing[i].points + '</strong></td></tr>';
    }
});

// to serve the page via express get method

router.get('/', function (req, res) {
    res.send(renderFullPage(gameTitle, gameData));
});

/*
 This function will output html part. The premier table title and data are passed and rendered.
 */
function renderFullPage(title, data) {
    return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n    \t<title>React Router Redux Express</title>\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">\n    </head>\n    <body>\n    \t<div class="container">\n    \t<h1 class="text-center">' + title + '</h1>\n        <table class="table">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Team</th>\n              <th>Game Played</th>\n              <th>Wins</th>\n              <th>Draws</th>\n              <th>Losses</th>\n              <th>Goals</th>\n              <th>Goals Against</th>\n              <th>Goals Difference</th>\n              <th>Points</th>\n            </tr>\n          </thead>\n          <tbody>\n            ' + data + '\n          </tbody>\n        </table>\n        </div>\n\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>\n    </body>\n    </html>\n    ';
}
// Exporting
exports.default = router;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _route = __webpack_require__(1);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// consts
// Importing node modules
var app = (0, _express2.default)();

// Importing source files


app.use('/', _route2.default);

// listening to port 3000. change it if this port is occupied
var server = app.listen(3000, function () {
        var _server$address = server.address(),
            address = _server$address.address,
            port = _server$address.port;

        // address normaly is localhost


        console.log('Node Developer Exercise running at http://localhost:' + port);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ })
/******/ ]);