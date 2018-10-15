const functions = require('firebase-functions');
const express = require('express') ;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express(); 

app.get('/status', (request, response) => {
    let sekarang = Date.now() ;
    let hours = (mulai) => Math.round(Math.abs(sekarang - mulai) / 36e5 ) ;
    let serverStatus = () => (Math.floor(Math.random() * 5) > 0 ? "UP" : "DOWN") ;
    

    let json = [{
        "id": 1,
        "alias": "Anderson",
        "location": "Semarang",
        "uptime": hours(Date.parse('May 12, 2014')),
        "status": serverStatus()
      },
      {
        "id": 2,
        "alias": "Nabila",
        "location": "Semarang",
        "uptime": hours( Date.parse('June 12, 2012') ),
        "status": serverStatus()
      }
    ];


    response.send( json ) ;
});


app.get('/status-cached', (resuest, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600') ;


    let sekarang = Date.now() ;
    let hours = (mulai) => Math.round(Math.abs(sekarang - mulai) / 36e5 ) ;
    let serverStatus = () => (Math.floor(Math.random() * 5) > 0 ? "UP" : "DOWN") ;
    

    let json = [{
        "id": 1,
        "alias": "Anderson",
        "location": "Semarang",
        "uptime": hours(Date.parse('May 12, 2014')),
        "status": serverStatus()
      },
      {
        "id": 2,
        "alias": "Nabila",
        "location": "Semarang",
        "uptime": hours( Date.parse('June 12, 2012') ),
        "status": serverStatus()
      },
      {
        "id": 3,
        "alias": "Tungslup",
        "location": "Semarang",
        "uptime": hours(Date.parse('May 10, 2014')),
        "status": serverStatus()
      },
      {
        "id": 4,
        "alias": "LSM",
        "location": "Singapore",
        "uptime": hours( Date.parse('March 12, 2015') ),
        "status": serverStatus()
      },
      {
        "id": 5,
        "alias": "Growell",
        "location": "Singapore",
        "uptime": hours(Date.parse('June 3, 2014')),
        "status": serverStatus()
      },
      {
        "id": 6,
        "alias": "Ibra",
        "location": "Semarang",
        "uptime": hours( Date.parse('September 12, 2015') ),
        "status": serverStatus()
      },
      {
        "id": 7,
        "alias": "Wongfeihung",
        "location": "Ningxia",
        "uptime": hours(Date.parse('August 20, 2016')),
        "status": serverStatus()
      },
      {
        "id": 8,
        "alias": "Budak",
        "location": "Semarang",
        "uptime": hours( Date.parse('January 10, 2016') ),
        "status": serverStatus()
      }


    ];


    response.send( json ) ;
});


exports.app = functions.https.onRequest( app );
   


// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
