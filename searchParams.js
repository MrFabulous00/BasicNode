const { URL } = require('url');

const myURL = new URL(
  'https://www.google.com/search?q=%EB%84%A4%EC%9D%B4%EB%B2%84&rlz=1C5CHFA_enKR957KR959&oq=&aqs=chrome.1.69i59i450l8.351239j0j1&sourceid=chrome&ie=UTF-8'
);

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log();
