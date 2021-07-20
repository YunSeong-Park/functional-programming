{
  const log = console.log 


  function *filter(f, iter) {
    for (const a of iter){
      if (f(a)) {
        yield a;
      }
    }
  }

  function *map(f, iter) {
    for (const a of iter){
      yield f(a);
    }
  }

  function take(length, iter) {
    let res = [];
    for (const a of iter) {
      res.push(a);
      if (res.length == length){
        return res
      }
    }
    return res
  }

  function reduce(f, acc, iter) {
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  }

  const add = (a, b) => a + b;


  const f = (list, length) =>  
    reduce(
      add, 
      0, 
      take(length, map(a=> a*a ,filter((a) => a % 2, list))))
  

  function main() {
    log(f([1, 2, 3, 4, 5], 1));
    log(f([1, 2, 3, 4, 5], 2));
    log(f([1, 2, 3, 4, 5], 3));
  }
  main();
  
  // function f(list:number[], length:number) {
  //   let i = 0;
  //   let acc = 0;
  //   for (const a of list){
  //     if( a % 2) {
  //       acc = acc + a * a;
  //       if(++i === length){
  //         break
  //       }
  //     }
  //   }
  //   log(acc)
  // }

  // function main() {
  //   f([1, 2, 3, 4, 5], 1);
  //   f([1, 2, 3, 4, 5], 2);
  //   f([1, 2, 3, 4, 5], 3);
  // }
  // main();
}