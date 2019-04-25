/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApiNode = new SpotifyWebApi();
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
var EventEmitter = require("events").EventEmitter;
var username = '';
var username1 = new EventEmitter();
var playlistId = '';
var playlistId2 = '';
var playlistId1 = new EventEmitter();
var playlistName = '';



var client_id = '5bdc26b569de48d388e9a279f91cdc8a'; // Your client id
var client_secret = '979e281a27854522852cc89f56f86daf'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

var login = function(callback) {
  
}

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());


app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email playlist-modify-public';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      show_dialog: true
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;


        var getUserInfo = {
          //request specific information here
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(getUserInfo, function(error, response, body) {
          // console.log('yeehaw: ' + body.id);
          // username1 = body.id;
          console.log(body);
          username1.body = body.id;
          username1.emit('update')
        });

        username1.on('update', function () {
          username = username1.body;

          playlistName = username + '\'s Playlist!';
          var createPlaylist = {
            
            url: 'https://api.spotify.com/v1/users/' + username+  '/playlists',
            body: JSON.stringify({
                'name': playlistName,
                'public': true
            }),
            dataType:'json',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            }
          };
  
          request.post(createPlaylist, function(error, response, body) {
            console.log(body);
            playlistId1.body = body;
            playlistId1.emit('update')
          });

          playlistId1.on('update', function() {
            playlistId = JSON.parse(playlistId1.body);
            playlistId2 = playlistId.id;


            var addTrack = {
              url: 'https://api.spotify.com/v1/playlists/' + playlistId.id + '/tracks',
              body: JSON.stringify({
                'uris': ['spotify:track:0i0wnv9UoFdZ5MfuFGQzMy']

              }),
              dataType: 'json',
              headers: {
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json',
              }
            };

            request.post(addTrack, function(error, response, body) {
              console.log('track-added');
              console.log(body);
            });
          });
        });
          
        var searchPlaylists = {
          url: 'https://api.spotify.com/v1/search?q=happy&type=playlist&limit=1',
          headers: {
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json',
          },
          json: true
        };

        request.get(searchPlaylists, function(error, response, body) {
          console.log("SEARCHING...");
          console.log(body);
        });


        // we can also pass the token to the browser to make requests from there
        res.redirect('http://localhost:3000/playlist/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
        //res.redirect('http://localhost:8888/callback.html')
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });

  }
});


// app.get('/refresh_token', function(req, res) {

//   // requesting access token from refresh token
//   var refresh_token = req.query.refresh_token;
//   var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     },
//     json: true
//   };

//   request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var access_token = body.access_token;

//       res.send({
//         'access_token': access_token,
//       });
//     }
//   });
// });

console.log('Listening on 8888');

app.listen(8888);
