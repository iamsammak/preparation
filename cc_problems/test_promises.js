// let name = "sam";
//
// let peach = new Promise(function hi(name) {
//   console.log(`Hi ${name}`);
//   return name;
// });
//
// // peach.then(function(name) {
// //   console.log(`oh dear ${name}`);
// // });
//
let sayhi = function(name) {
  console.log(`hi ${name}`);
  return "what";
};

let saybye = function(name) {
  console.log(`bye ${name}`);
};
//
// let apple = new Promise(sayhi, saybye);
//
// apple.then()


// const request = new Promise(resolve => {
//   setTimeout((msg) => resolve(msg), 1000);
// });
//
// const receiveResponse = msg => console.log(msg);
//
// request.then(receiveResponse("hello there"));

// new Promise((sayhi, reject) => {
//     console.log('Initial');
//
//     sayhi();
// })
// .then((what) => {
//     throw new Error('Something failed');
//
//     console.log('Do this');
//     return what;
// })
// .catch((what) => {
//     console.log(`${what}`);
// })
// .then(() => {
//     console.log('Do this whatever happened before');
// });

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(2000).then(() => sayhi("sam")).catch(() => saybye("jovian"));

// https://scotch.io/tutorials/javascript-promises-for-dummies

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            const reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

const askMom = function () {
  console.log("before asking mom");
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            // yay, you got a new phone
            // what is fulfilled
            // fulfilled value is exactly the value you pass in your Promise
            // resolve(your_success_value)
            // Therefore, in this case it would be 'phone'
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
        // or with fat arrow
        // .catch(error => console.log(error.message));
  console.log("after asking mom");
  console.log("just kidding, JS waits for no man");
};

// let showOff = function(phone) {
//   return new Promise(
//     function(resolve, reject) {
//       let msg = 'Hey friend, I have a new ' +
//                   phone.color + ' ' + phone.brand + ' phone';
//
//       resolve(msg);
//     }
//   )
// }

// shorten version of above, since we all have a resolve.
let showOff = function(phone) {
  let msg = 'Hey friend, I have a new ' +
            phone.color + ' ' + phone.brand + ' phone';

  return Promise.resolve(msg);
};

askMom();
