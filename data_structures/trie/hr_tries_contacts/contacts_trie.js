// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
//
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });
//
// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });
//
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }
//
// /////////////// ignore above this line ////////////////////

class Trie {
    constructor() {
      this.store = {};
    }

    process(operation, string) {

      if (operation === "add") {
          let store = this.store;
          for(let char of string) {
              if (!store[char]) {
                  store[char] = {count: 0}
              }
              store[char].count++;
              store = store[char];
          }
      } else if (operation === "find") {
          let store = this.store;
          for (let char of string) {
              if (typeof store[char] != 'undefined') {
                  store = store[char];
              } else {
                  console.log(0);
                  return;
              }
          }

          console.log(store.count);
      }
    }

    print() {
      console.log(this.store);
    }
}

// function main() {
//     var n = parseInt(readLine());
//     let tr = new Trie();
//     for(var a0 = 0; a0 < n; a0++){
//         var op_temp = readLine().split(' ');
//         var op = op_temp[0];
//         var contact = op_temp[1];
//         // console.log("operation", op);
//         // console.log("word", contact)
//         tr.process(op, contact);
//     }
//
// }

let sam = new Trie();
sam.process("add", "hacks");
sam.process("add", "hacker");
sam.process("add", "hack");
sam.process("add", "hackerrank");
