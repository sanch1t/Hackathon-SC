///////////////////////////////////////////////////////
//
// Application: Sample Web App
// Version: 1.0.0
// The Sample Web App demonstrates the use of EnableX Server API & Web Toolkit.
// The main motivation behind this application is to demonstrate usage of APIs and
// allow developers to ramp up on app by hosting on their own devices instead of
// directly using servers.
//
// Released: Nov 26, 2018
//
// File: config.js
// Service Configuration File, need to be modified as needed.
//
/////////////////////////////////////////////////////


var vcxconfig={};

vcxconfig.pwdFilePath = "files/users.htpasswd"

vcxconfig.SERViCE={
    name: "Video KYC POC",                // Name of the App
    version: "1.0.0",                               // Version
    path: "/v1",                                    // EnableX Server API Version Route to access
    domain: "localhost",                       // Domain / Sub-Domain to host this Service
    port  : "4443",                                 // Port No. of this Service
    listen_ssl : true                               // Enable SSL. Set always to "true"
};



// SSL Certificate (Self Signed or Registered)

vcxconfig.Certificate={
    ssl_key:'../certs/example.key',
    ssl_cert:'../certs/example.crt',
    sslCaCerts: null
};



// Enbalex Server API Infomration

vcxconfig.SERVER_API_SERVER={
    host: 'api.enablex.io',
    port: '443',                                     // PORT of Service (If specified by EnableX)
};

vcxconfig.APP_ID    = "65f1162bb7b36ba7f602ebf7";               // APP ID to access Server API
vcxconfig.APP_KEY   = "Ty2uAe8aBamuGahyvyHu2yLaTyHaVuteeeee";   // APP KEY to access Server API



vcxconfig.clientPath = "../client";                 // Client End Point UI Route

var module = module || {};
module.exports = vcxconfig;