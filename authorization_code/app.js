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
var playlistId1 = new EventEmitter();
var playlistId2 = '';
var playlistName = '';
var searchingPlay = new EventEmitter();
var playlistIds = [5];
var songURIs = [25];
var searchingSongs1 = new EventEmitter();
var searchingSongs2 = new EventEmitter();
var searchingSongs3 = new EventEmitter();
var searchingSongs4 = new EventEmitter();
var searchingSongs5 = new EventEmitter();
var playlisturi = '';


var client_id = '5bdc26b569de48d388e9a279f91cdc8a'; // Your client id
var client_secret = '979e281a27854522852cc89f56f86daf'; // Your secret
var redirect_uri = 'https://agile-meadow-13752.herokuapp.com/callback'; // Your redirect uri

const cool = require('cool-ascii-faces')

const path = require('path')

var http = require('http');
var fs = require('fs');

var admin = require('firebase-admin')
var serviceAccount = require('./boombox-1c217-firebase-adminsdk-qed1w-74a7a4f142.json')

// var secondary = ({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://boombox-1c217.firebaseio.com'
// });
const secondary = {
  apiKey: "AIzaSyD2-jP3vyKiZDGWu3IsiKTaagdx0R5wjDo",
  authDomain: "boombox-1c217.firebaseapp.com",
  databaseURL: "https://boombox-1c217.firebaseio.com",
  projectId: "boombox-1c217",
  storageBucket: "",
  messagingSenderId: "129261596427"
};


var base = admin.initializeApp({secondary}, "secondary");

const PORT = process.env.PORT || 8888



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

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.use(cors())
app.use(cookieParser());

app.post("http://localhost:8888/", function(request, response) {
  console.log("MURRRR");
  console.log(request.body); 
});
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

        //SEARCH FOR PLAYLISTS
        var searchPlaylists = {
          url: 'https://api.spotify.com/v1/search?q=sad&type=playlist&limit=5',
          headers: {
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json',
          },
          json: true
        };

        request.get(searchPlaylists, function(error, response, body) {
          //console.log(body);
          searchingPlay.body = body;
          searchingPlay.emit('update')
        });

        searchingPlay.on('update', function(){
          playlistIds[0] = (searchingPlay.body.playlists.items[0].id);
          playlistIds[1] = (searchingPlay.body.playlists.items[1].id);
          playlistIds[2] = (searchingPlay.body.playlists.items[2].id);
          playlistIds[3] = (searchingPlay.body.playlists.items[3].id);
          playlistIds[4] = (searchingPlay.body.playlists.items[4].id);

          //SEARCH FOR SONGS

          var k = 0;

          var searchSongs1 = {
            url: 'https://api.spotify.com/v1/playlists/' + playlistIds[0] + '/tracks/?limit=5',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            json: true
          };

          request.get(searchSongs1, function(error, response, body) {
              //console.log(body);
              searchingSongs1.body = body;
              searchingSongs1.emit('update')
          });

          searchingSongs1.on('update', function(){
            var j = 0;

            for (j; j < 5; j++) {
                songURIs[k] = (searchingSongs1.body.items[j].track.uri);
                console.log(songURIs[k]);
                k++;
            }
          });

          var searchSongs2 = {
            url: 'https://api.spotify.com/v1/playlists/' + playlistIds[1] + '/tracks/?limit=5',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            json: true
          };

          request.get(searchSongs2, function(error, response, body) {
              //console.log(body);
              searchingSongs2.body = body;
              searchingSongs2.emit('update')
          });

          searchingSongs2.on('update', function(){
            var j = 0;

            for (j; j < 5; j++) {
                songURIs[k] = (searchingSongs2.body.items[j].track.uri);
                //console.log(songURIs[k]);
                k++;
            }
          });

          var searchSongs3 = {
            url: 'https://api.spotify.com/v1/playlists/' + playlistIds[2] + '/tracks/?limit=5',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            json: true
          };

          request.get(searchSongs3, function(error, response, body) {
              //console.log(body);
              searchingSongs3.body = body;
              searchingSongs3.emit('update')
          });

          searchingSongs3.on('update', function(){
            var j = 0;

            for (j; j < 5; j++) {
                songURIs[k] = (searchingSongs3.body.items[j].track.uri);
                //console.log(songURIs[k]);
                k++;
            }
          });

          var searchSongs4 = {
            url: 'https://api.spotify.com/v1/playlists/' + playlistIds[3] + '/tracks/?limit=5',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            json: true
          };

          request.get(searchSongs4, function(error, response, body) {
              //console.log(body);
              searchingSongs4.body = body;
              searchingSongs4.emit('update')
          });

          searchingSongs4.on('update', function(){
            var j = 0;

            for (j; j < 5; j++) {
                songURIs[k] = (searchingSongs4.body.items[j].track.uri);
                //console.log(songURIs[k]);
                k++;
            }
          });

          var searchSongs5 = {
            url: 'https://api.spotify.com/v1/playlists/' + playlistIds[4] + '/tracks/?limit=5',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            },
            json: true
          };

          request.get(searchSongs5, function(error, response, body) {
              //console.log(body);
              searchingSongs5.body = body;
              searchingSongs5.emit('update')
          });

          searchingSongs5.on('update', function(){
            var j = 0;

            for (j; j < 5; j++) {
                songURIs[k] = (searchingSongs5.body.items[j].track.uri);
                //console.log(songURIs[k]);
                k++;
            }
          });




        //GET USER INFORMATION
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
          // userId = body.id;
          // displayName = body.display_name;
          // const usersRef = base.database().ref('fromServer');
          // let curr = date.getTime()
          // usersRef.child(curr).set({
          // keyword:'test',
          // playlistURI: '',
      })
       
          // window.localStorage.setItem("userID", userId);
        });

         //pass username to client
        // app.get('/playlist',function(req,res){
        //    res.send({username: userId})
        //    console.log("usern")
        //  })

        //pass username to client
        // app.get('/playlist',function(req,res){
        //   res.send({username: userId})
        // })

        username1.on('update', function () {
          username = username1.body;

          //CREATE PLAYLIST
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


              //ADD TRACKS TO PLAYLIST
              var addTrack = {
                url: 'https://api.spotify.com/v1/playlists/' + playlistId.id + '/tracks',
                body: JSON.stringify({
                  'uris': [songURIs[0], songURIs[1],songURIs[2],songURIs[3],songURIs[4],songURIs[5],songURIs[6],songURIs[7],songURIs[8],songURIs[9],songURIs[10], songURIs[11],songURIs[12],songURIs[13],songURIs[14],songURIs[15],songURIs[16],songURIs[17],songURIs[18],songURIs[19],songURIs[20],songURIs[21],songURIs[22],songURIs[23],songURIs[24]]

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
      });


        // we can also pass the token to the browser to make requests from there
        res.redirect('http://localhost:3000/save/#' +
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

app.get("/", (req, res) =>{
  console.log("responding to root route")
  res.send("HI FROM ROOT!")

})

console.log('Listening on 8888');
app.listen(PORT);
