# selenium-requests
A Selenium-based request-like module to evade TLS fingerprinting.

# Installation:
```
npm install selenium-requests
```

# Example
```js
const selReq = require('selenium-requests');
selReq.setOrigin('foo', 'bar')
selReq.createDriver();
selReq.request('https://example', 'get', { 'X-Forwarded-For': 'null' }, JSON.stringify({ foo: 'bar' }));
selReq.closeDriver();
```
