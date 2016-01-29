Digest Auth Request
===================

Make digest-auth ajax requests with javascript. Only depency is [CryptoJS MD5](https://code.google.com/p/crypto-js/#MD5).

More info on Digest Auth: http://en.wikipedia.org/wiki/Digest_access_authentication
Currently only supports "auth" quality-of-protection type.

### Usage:

GET request:

```js
Meteor.startup(() => {
  var url = ' http://ntv.server.net:7888/search.html?part=userstats';

// create digest request object

  var getRequest = new DigestAuthRequest('GET', url, 'user', 'password');

// make the request
  getRequest.request(function(data) {
    console.log(data)
  },function(errorCode) {
    console.log(errorCode);
  });
  
// make additional GET requests here...
```
POST request:

```js

var postData = {
   address: '123 main st.',
   city: 'Denver',
   state: 'Colorado'
}
postData = JSON.stringify(postData);

// create new digest request object
// because method is different
// otherwise we could re-use the first one
var postReq = new DigestAuthRequest('POST', url, 'username', 'password');

postReq.request(function(data) { 
  // success callback
  // data probably a success message
},function(errorCode) { 
  // error callback
  // tell user request failed
}, postData);
```
### Toggle console logging

Out of the box digestAuthRequest.js has logging turned on so you can debug. Set `loggingOn` to false to disable it.


### Packaged and tuned for use in meteor
by Viktor Nesterenko