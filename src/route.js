// Import node module
import express from 'express';
import requset from 'request';

// consts
const router = express.Router();
const requests = requset;

// premier table title and data variable.
let gameData = '';
let gameTitle = '';

// fetch JSON data from api and assign to variable.
requests.get('http://api.football-data.org/v1/competitions/426/leagueTable', function (error, response, body) {

    let datas = JSON.parse(body);
    gameTitle = datas.leagueCaption;

    for(var i=0; i<datas.standing.length; i++ ){
        gameData += '<tr> <th scope="row">'+datas.standing[i].position+'</th><td><img width="20px" src=" '+datas.standing[i].crestURI+'"> '+datas.standing[i].teamName+'</td> <td>'+datas.standing[i].playedGames+'</td><td>'+datas.standing[i].wins+'</td><td>'+datas.standing[i].draws+'</td><td>'+datas.standing[i].losses+'</td><td>'+datas.standing[i].goals+'</td><td>'+datas.standing[i].goalsAgainst+'</td><td>'+datas.standing[i].goalDifference+'</td><td><strong>'+datas.standing[i].points+'</strong></td></tr>'
    }
});

// to serve the page via express get method

router.get('/', (req, res) => {
  res.send(renderFullPage(gameTitle,gameData));
});

/*
 This function will output html part. The premier table title and data are passed and rendered.
 */
function renderFullPage(title,data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<!-- Required meta tags always come first -->
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<title>React Router Redux Express</title>
    	<!-- Bootstrap CSS -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
    </head>
    <body>
    	<div class="container">
    	<h1 class="text-center">${title}</h1>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Game Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals</th>
              <th>Goals Against</th>
              <th>Goals Difference</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            ${data}
          </tbody>
        </table>
        </div>

    	<!-- jQuery first, then Bootstrap JS. -->
    	<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}
// Exporting
export default router;