# Developing a Video KYC Web App with Node.js and EnableX Web Toolkit

Coding a Video KYC Web App: Node.js & EnableX Web Toolkit 

## 3. Installation

### 3.1 Pre-Requisites

#### 3.1.2 SSL Certificates

The Application needs to run on https. So, you need to use a valid SSL Certificate for your Domain and point your application to use them.

However you may use self-signed Certificate to run this application locally. There are many Web Sites to get a Self-Signed Certificate generated for you, Google it. Few among them are:

* https://letsencrypt.org/
* https://www.sslchecker.com/csr/self_signed
* https://www.akadia.com/services/ssh_test_certificate.html  

As you have Certificate or created a Self-Signed Certificate, create a directory "certs" under your Sample Web App Directory. Copy your Certificate files (.key and .crt files)  to this directory.

The following below can also be used to create a self-signed certificate.

 Linux/Mac
```javascript
  cd Video-KYC-Webrtc-Application-Sample-for-Web
  mkdir certs
  sudo openssl req -x509 -newkey rsa:4096 -keyout ./certs/example.key -out ./certs/example.crt -days 10000 -nodes
  sudo chmod 755 ./certs/example.*
  cd ..
```
Windows(Use Git Bash)
```javascript
  cd Video-KYC-Webrtc-Application-Sample-for-Web
  mkdir certs
  openssl req -x509 -newkey rsa:4096 -keyout ./certs/example.key -out ./certs/example.crt -days 10000 -nodes
  chmod 755 ./certs/example.*
  cd ..
```

Run `npm install --save` to build the project and the build artifacts will be stored in the `./node_modules` directory.

#### 3.2.1 Run Server

Run `node server.js` inside `server` folder for starting your Server. 

```
  - cd server
  - node server.js

```


#### 3.2.2 Test 

* Open a browser and go to [https://localhost:4443/](https://localhost:4443/). The browser should load the App. 
* Allow access to Camera and Mic as and when prompted to start your first RTC Call through EnableX


