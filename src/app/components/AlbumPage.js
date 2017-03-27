import React, { Component } from 'react';
import Q from 'q';
import '../styles/AlbumPage.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { Grid, Button, Navbar, Glyphicon, nav, Col, Row, ColProps, RowProps } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-js';
import Timer from './timer'
import request from 'request';
import { connect, dispatch } from 'react-redux';

import Tracklist from './Tracklist';
import ArtCard from './ArtCard';
import LyricCard from './LyricCard';

var client_id = '9d2b0b01004541db9ea037efe0ce76d9'; // Your client id
var client_secret = '331cfe3690b64033b376843ce22d6893'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri

/*
var base_url= "http://api.genius.com";
var search_url= base_url + "/search";
var song_title= "Billabong Valley";
var gdata = {
   'q' : song_title 
  };
var gclinet_id='oyKIbNoXmQDYl-CQO_zDA1c5jO0s1xEnI_y-cOrEUjFCm5PEpJ1bEd7JX6onhegc';
var gclient_secret='Y8Wxh8YWP3PeJLis9YWsQzch--0cg5NkSSkuf1rHv9JvQxzqRPMcIGEYZksxgscXn-qktaJXqopy8OJ1CQFwIg';
var gclient_access_token= 'Qh26ose9NiyhZjo92Rx2QUi5h7TtUyIVilGPDs9Ant0rT79kKyS2ZM4xjM0s6v23';

var headers = {'Authorization': gclient_secret};
var url = 'https://api.genius.com/oauth/authorize?';
var response = request.url({
  url,
  data : {
    client_id: gclinet_id,

  }

});

console.log(response.json());
*/

var text = {
  "href" : "https://api.spotify.com/v1/albums/13WjgUEEAQp0d9JqojlWp1/tracks?offset=0&limit=50",
  "items" : [ {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 224671,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/5v501hmUMvbHPKa7qm0MGD"
    },
    "href" : "https://api.spotify.com/v1/tracks/5v501hmUMvbHPKa7qm0MGD",
    "id" : "5v501hmUMvbHPKa7qm0MGD",
    "name" : "F*ck Your Ethnicity",
    "preview_url" : "https://p.scdn.co/mp3-preview/91c708c3f1723a1681bf86d3ae23943e4236da9e?cid=null",
    "track_number" : 1,
    "type" : "track",
    "uri" : "spotify:track:5v501hmUMvbHPKa7qm0MGD"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 173158,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/5DO1SazQppcsKQ1c1JpyQz"
    },
    "href" : "https://api.spotify.com/v1/tracks/5DO1SazQppcsKQ1c1JpyQz",
    "id" : "5DO1SazQppcsKQ1c1JpyQz",
    "name" : "Hol' Up",
    "preview_url" : "https://p.scdn.co/mp3-preview/42fcf1d8302c1c81ffc6b90a9d8a0f3d7ae0a95d?cid=null",
    "track_number" : 2,
    "type" : "track",
    "uri" : "spotify:track:5DO1SazQppcsKQ1c1JpyQz"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 215509,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2MYl0er3UZ1RlKwRb5LODh"
    },
    "href" : "https://api.spotify.com/v1/tracks/2MYl0er3UZ1RlKwRb5LODh",
    "id" : "2MYl0er3UZ1RlKwRb5LODh",
    "name" : "A.D.H.D",
    "preview_url" : "https://p.scdn.co/mp3-preview/a43c464f49bf8f074d95b2457e467c55728b48d1?cid=null",
    "track_number" : 3,
    "type" : "track",
    "uri" : "spotify:track:2MYl0er3UZ1RlKwRb5LODh"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 235921,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/7yQDLdub1VuUUwbpteUX7w"
    },
    "href" : "https://api.spotify.com/v1/tracks/7yQDLdub1VuUUwbpteUX7w",
    "id" : "7yQDLdub1VuUUwbpteUX7w",
    "name" : "No Make-Up (Her Vice)",
    "preview_url" : "https://p.scdn.co/mp3-preview/2d479e738a58914bb1a8033e86dff95e77c156b6?cid=null",
    "track_number" : 4,
    "type" : "track",
    "uri" : "spotify:track:7yQDLdub1VuUUwbpteUX7w"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 161670,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3RPK9VQuTsiTySY48ldeqx"
    },
    "href" : "https://api.spotify.com/v1/tracks/3RPK9VQuTsiTySY48ldeqx",
    "id" : "3RPK9VQuTsiTySY48ldeqx",
    "name" : "Tammy's Song (Her Evils)",
    "preview_url" : "https://p.scdn.co/mp3-preview/c3976ac2886558f7ccc1fd4cb057bf5395e8e1fd?cid=null",
    "track_number" : 5,
    "type" : "track",
    "uri" : "spotify:track:3RPK9VQuTsiTySY48ldeqx"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 161137,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3s3ZBjw8kKX5HXymkRIDVy"
    },
    "href" : "https://api.spotify.com/v1/tracks/3s3ZBjw8kKX5HXymkRIDVy",
    "id" : "3s3ZBjw8kKX5HXymkRIDVy",
    "name" : "Chapter Six",
    "preview_url" : "https://p.scdn.co/mp3-preview/5202e0e796897c9617f3e861e603b91762cdacff?cid=null",
    "track_number" : 6,
    "type" : "track",
    "uri" : "spotify:track:3s3ZBjw8kKX5HXymkRIDVy"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 216899,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3gl1RenSXn1biKijZ1qvky"
    },
    "href" : "https://api.spotify.com/v1/tracks/3gl1RenSXn1biKijZ1qvky",
    "id" : "3gl1RenSXn1biKijZ1qvky",
    "name" : "Ronald Reagan Era",
    "preview_url" : "https://p.scdn.co/mp3-preview/53f2e50a61077ca8a6ec5204b506396a4ba6a6ea?cid=null",
    "track_number" : 7,
    "type" : "track",
    "uri" : "spotify:track:3gl1RenSXn1biKijZ1qvky"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 261874,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2NxIp9jbmsnaIiAExWOEo0"
    },
    "href" : "https://api.spotify.com/v1/tracks/2NxIp9jbmsnaIiAExWOEo0",
    "id" : "2NxIp9jbmsnaIiAExWOEo0",
    "name" : "Poe Mans Dreams (His Vice)",
    "preview_url" : "https://p.scdn.co/mp3-preview/66571ee57b693a6c4650776c7bbed7d85a739969?cid=null",
    "track_number" : 8,
    "type" : "track",
    "uri" : "spotify:track:2NxIp9jbmsnaIiAExWOEo0"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 320957,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/12bCgkFnyyTI8B1OmmRhbx"
    },
    "href" : "https://api.spotify.com/v1/tracks/12bCgkFnyyTI8B1OmmRhbx",
    "id" : "12bCgkFnyyTI8B1OmmRhbx",
    "name" : "The Spiteful Chant",
    "preview_url" : "https://p.scdn.co/mp3-preview/b35b01fdbac39377addeff63384e217f9caa66ec?cid=null",
    "track_number" : 9,
    "type" : "track",
    "uri" : "spotify:track:12bCgkFnyyTI8B1OmmRhbx"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 75535,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2C1C4QjjMmru4mYrPSQzWs"
    },
    "href" : "https://api.spotify.com/v1/tracks/2C1C4QjjMmru4mYrPSQzWs",
    "id" : "2C1C4QjjMmru4mYrPSQzWs",
    "name" : "Chapter Ten",
    "preview_url" : "https://p.scdn.co/mp3-preview/0db7ffd049149da4d329a9d8e7e0b75cf5b031ab?cid=null",
    "track_number" : 10,
    "type" : "track",
    "uri" : "spotify:track:2C1C4QjjMmru4mYrPSQzWs"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 227291,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/0bcCgRudYZ4kiOHZNZfqxU"
    },
    "href" : "https://api.spotify.com/v1/tracks/0bcCgRudYZ4kiOHZNZfqxU",
    "id" : "0bcCgRudYZ4kiOHZNZfqxU",
    "name" : "Keisha's Song (Her Pain)",
    "preview_url" : "https://p.scdn.co/mp3-preview/0b87c63cd66a1503482dae4354c55c81b061a4a8?cid=null",
    "track_number" : 11,
    "type" : "track",
    "uri" : "spotify:track:0bcCgRudYZ4kiOHZNZfqxU"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 168591,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2b3KgzISdjZVNPJJ1945nw"
    },
    "href" : "https://api.spotify.com/v1/tracks/2b3KgzISdjZVNPJJ1945nw",
    "id" : "2b3KgzISdjZVNPJJ1945nw",
    "name" : "Rigamortus",
    "preview_url" : "https://p.scdn.co/mp3-preview/66bc9fbd7971dca5018b9d7a5472e69faa7ea42d?cid=null",
    "track_number" : 12,
    "type" : "track",
    "uri" : "spotify:track:2b3KgzISdjZVNPJJ1945nw"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 304668,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/705u4LfXcTBuDOB8UCy0A7"
    },
    "href" : "https://api.spotify.com/v1/tracks/705u4LfXcTBuDOB8UCy0A7",
    "id" : "705u4LfXcTBuDOB8UCy0A7",
    "name" : "Kush & Corinthians",
    "preview_url" : "https://p.scdn.co/mp3-preview/2cb094ef46344abe73b197c3c00c739459607a7e?cid=null",
    "track_number" : 13,
    "type" : "track",
    "uri" : "spotify:track:705u4LfXcTBuDOB8UCy0A7"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 215791,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/6jl01C724Mk68qlOQLco5I"
    },
    "href" : "https://api.spotify.com/v1/tracks/6jl01C724Mk68qlOQLco5I",
    "id" : "6jl01C724Mk68qlOQLco5I",
    "name" : "Blow My High (Members Only)",
    "preview_url" : "https://p.scdn.co/mp3-preview/712a269bd8e02fffff415710c7a462684bdf2881?cid=null",
    "track_number" : 14,
    "type" : "track",
    "uri" : "spotify:track:6jl01C724Mk68qlOQLco5I"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 350001,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2FTGmG9PvlXEERkb1sYBE3"
    },
    "href" : "https://api.spotify.com/v1/tracks/2FTGmG9PvlXEERkb1sYBE3",
    "id" : "2FTGmG9PvlXEERkb1sYBE3",
    "name" : "Ab-Souls Outro",
    "preview_url" : "https://p.scdn.co/mp3-preview/4cc95decfa087ea5f8c6c9965ded78471339c0ad?cid=null",
    "track_number" : 15,
    "type" : "track",
    "uri" : "spotify:track:2FTGmG9PvlXEERkb1sYBE3"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "name" : "Kendrick Lamar",
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 279854,
    "explicit" : true,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4fVqQKbROkz8Z9FFJS7vls"
    },
    "href" : "https://api.spotify.com/v1/tracks/4fVqQKbROkz8Z9FFJS7vls",
    "id" : "4fVqQKbROkz8Z9FFJS7vls",
    "name" : "HiiiPower",
    "preview_url" : "https://p.scdn.co/mp3-preview/4743ebf596337b690c53e05588da410fc7dba0f9?cid=null",
    "track_number" : 16,
    "type" : "track",
    "uri" : "spotify:track:4fVqQKbROkz8Z9FFJS7vls"
  } ],
  "limit" : 50,
  "next" : null,
  "offset" : 0,
  "previous" : null,
  "total" : 16
}

var s = new SpotifyWebApi();
s.setPromiseImplementation(Q);

class AlbumPage extends Component {
  constructor(props) {
    super(props);
    console.log("Look here!");
    this.props.setAlbumId('13WjgUEEAQp0d9JqojlWp1');
    console.log(this.props.albumId);
  }

  componentDidMount() {
    if (true) {
    s.getAlbum(this.props.albumId).then((data) => {
      
      
      this.props.setName('ghj');
      this.props.setEndTime(data.id);
       this.setState({
         trackList: data.tracks.items,
         artist: data.artists[0].name,
         albumName: data.name,
         albumId: this.props.albumId,
         genre: data.genres,
         type: data.type,
         albumURL: data.images[0].url,
         activeSong: data.tracks.items[0].name
       })
       var albumLen = this.getAlbumLength(this.state.trackList);
       this.setState({
         timeString: albumLen[1],
         timeArray: albumLen[0]
       })
    })
   }
  }


  getAlbumLength(tracklist) {
    var hours = 0; var minutes = 0; var seconds = 0;
    var timeString = "";
    var length = 0;
    for(var i = 0; i < tracklist.length; i++) {
      var song = tracklist[i];
      length += song.duration_ms;
    }
    length = Math.floor(length/1000);
    seconds = length%60;
    length = Math.floor(length/60);
    minutes = length%60;
    length = Math.floor(length/60);
    hours = length;

    var time = [hours, minutes, seconds];

    for (var j = 0 ; j < 3 ; j++) {
      if (time[j] < 10) {
        timeString += "0" + time[j];
      }
      else {
        timeString += time[j];
      }
      if (j != 2) {timeString += ":";}
    }
    return [time, timeString];
  }

  spawnTracks() {
    var trackArray = this.props.trackList;
    console.log(this.props.albumURL);
    return(
      <Tracklist tracks={text.items}/>
    );
  }

  render() {
    return (
      <div>
        <div className="headerPadding">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header"> 
              <p className="navbar-text ">{this.props.albumName}</p>
            </div>
            <div className="navbar-header">
            <Timer className="navbar-text" endTime={this.props.endTime}/>
            </div>
            </div>
          
        </nav>
        
        <Grid>
          <Row className="show-grid">
            <Col sm={3} md={4} lg={4}>          
              <ArtCard />
              {this.spawnTracks()}
            </Col>
            <Col sm={3} md={4} lg={4}>
              <LyricCard />
              <Button />
              </Col>
            <Col sm={3} md={4} lg={4}>
              <LyricCard />
             </Col>
          </Row>
        </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    albumName: state.albumName,
    albumId: state.albumId,
    genre: state.genre,
    type: state.type,
    albumArtURL: state.albumArtURL,
    activeSong: state.activeSong,
    endTime: state.endTime,
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //methods go here
    setAlbumId: (id) => {
      dispatch({
        type: "SETALBUMID",
        payload: id,
      })
    },
    setName: (name) => {
      dispatch({
        type: "SETNAME",
        payload: name,
      })
    },
    setEndTime: (time) => {
      dispatch({
        type: "SETENDTIME",
        payload: time
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);