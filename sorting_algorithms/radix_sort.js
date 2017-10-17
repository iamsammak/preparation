// radix sort only sorts numbers
// sort by ones place first
// then by tens place
// then by hundreds place

function radixSort(array) {
  let buckets = {};

  for(let i = 0; i < 9; i++) {
    buckets[i] = [];
  }

  for(let j = 0; j < array.length; j++) {

  }

}

// things to consider
// is first search for the max number
// then you'll know how many tens place you'll need to radix sort for


/* A Queue based datastructure for implementing our radix algorithm.
Sorting will modify the existing input data and return the sorted data */
function Queue(){
    this.dataStore = [];
    this.enqueue   = enqueue;
    this.dequeue   = dequeue;
    this.isEmpty   = isEmpty;
};
function enqueue(element){
    this.dataStore.push(element);
};
function dequeue(){
    if(this.dataStore.length == 0){
      return false;
    } else {
      return this.dataStore.shift();
    }
};
function isEmpty(){
    if(this.dataStore.length == 0){
      return true;
    } else {
      return false;
    }
};
/* This particular radix function will sort positive integers of value range 0 - 99
Though it is easily scale-able to accept a much larger value range with little modification */
function radix(data){
    var bin = []; // Used to hold our array of queues
    var digIndex = []; // This will be used to hold mapping values for remapping data elements to their proper index location
    for(var i = 0; i < 10; i++){
        bin[i] = new Queue();
    };  // Block 1------------------------------
    for(var i = 0; i < data.length; i++){
        bin[data[i]%10].enqueue(data[i]); // The first enqueue process is a forward sweep
    };
    for(var i = 0; i < bin.length; i++){
        digIndex.push(bin[i].dataStore.length);
    };
    for(var i = 0; i < digIndex.length - 1; i++){
        digIndex[i + 1] += digIndex[i];
    };
    for(var i = bin.length - 1; i >= 0; i--){
        while(!bin[i].isEmpty()){
            data[--digIndex[i]] = bin[i].dequeue(); // The first deqeueing process
        }
    };  // Block 2------------------------------
    digIndex = [];  // re-initialize digIndex
    for(var i = data.length - 1; i >= 0; i--){
        bin[Math.floor(data[i]/10)%10].enqueue(data[i]); // The second enqueue process will be a backsweep
    };
    for(var i = 0; i < bin.length; i++){
        digIndex.push(bin[i].dataStore.length);
    };
    for(var i = 0; i < digIndex.length - 1; i++){
        digIndex[i + 1] += digIndex[i];
    };
    for(var i = bin.length - 1; i >= 0; i--){
        while(!bin[i].isEmpty()){
            data[--digIndex[i]] = bin[i].dequeue(); // The final dequeue process resulting in the sorted data array
        }
    };
    return data;
};
