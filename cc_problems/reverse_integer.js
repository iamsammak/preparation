// reverse an integer without any string methods
// since number is in base 10
// we can utilize the functions of multiplication, division and modulo
// in tandem to reverse the base 10 integer

// if you want to use this for non base 10, then just input base value

function reverseInt(num, base = 10) {
  let ret = 0;

  while (num != 0) {
    ret = (ret * base) + (num % base);
    num = Math.floor(num / base);
  }

  return ret;
}

console.log("reverse of 1223 =", reverseInt(1223));
console.log("reverse of 3427394827 =", reverseInt(3427394827));

// let arr = Array(desiredArraySize).fill(staticValue)
