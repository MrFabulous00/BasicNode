// const { odd, even } = require('./var');
// const checkNumber = require('./func');

// function checkStringOddOrEven(str) {
//   if (str.length % 2) {
//     return odd;
//   } else {
//     return even;
//   }
// }

// console.log(checkNumber(10));
// console.log(checkStringOddOrEven('hello'));

const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});
