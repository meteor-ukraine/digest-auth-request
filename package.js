/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "Digest Auth Request",
  // Version number.
  version: "1.0.0",
  // Optional.Default is package directory name.
  name: "mrvictorn:dauth-request",
  git: "https://github.com/meteor-ukraine/digest-auth-request.git",
  documentation: 'README.md'
});

Package.onUse(function (api) {
  // one defined in Meteor 0.9.0
  api.versionsFrom('0.9.0');
  api.addFiles(['digestAuthRequest.js']);
  api.export('DigestAuthRequest',['server','client']);
});
/* This lets you use npm packages in your package*/
Npm.depends({
  "crypto-js": "3.1.6",
  "xmlhttprequest":"1.8.0"});
