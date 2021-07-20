const log = console.log;

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10]
];

const L = {};

L.flat = function *(iter) {
  for (const a of iter) {
    if (a && a[Symbol.iterator]){
      for (const b of a){
        yield b;
      }
    }else{
      yield a;
    }
  }
}

log([...L.flat(arr)])

