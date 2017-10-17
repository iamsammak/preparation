class Trie {
  constructor() {
    this.tree = {};
  }

  insert(string) {
    let subtree = this.tree;
    for (let i = 0; i < string.length; i++) {
      let char = string[i]
      if (!subtree[char]) {
        subtree[char] = { count: 0 }
      }
      subtree[char].count++;
      subtree = subtree[char];
    }
    subtree["end"] = true;
  }

  includes(string) {
    let subtree = this.tree;
    for (let char of string) {
      if (typeof subtree[char] != 'undefined') {
          subtree = subtree[char];
      } else {
          return false;
      }
    }
    if (subtree.end) {
      return true;
    } else {
      return false;
    }
  }

  find(string) {
    let subtree = this.tree;
    for (let char of string) {
      if (typeof subtree[char] != 'undefined') {
          subtree = subtree[char];
      } else {
          console.log(0);
          return;
      }
    }
    console.log(`find(${string}) returns count of words that beginning with '${string}'`);
    // console.log(subtree.count);
    return subtree.count;
  }

  print() {
    console.log(this.tree);
  }
}
