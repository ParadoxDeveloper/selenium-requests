import * as sel_req from '../src/index';
sel_req.createDriver();
sel_req.setOrigin('https://example.com:80', 'poop');
sel_req.request('https://example.com', 'post', { 'Content-Type': 'application/json' }, JSON.stringify({ foo: 'bar' }));
sel_req.closeDriver();
console.log('uwu');