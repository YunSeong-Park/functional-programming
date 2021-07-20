{
  const log = console.log 


  const curry = f => (a, ...bs) => 
    bs.length ? 
      f(a, ...bs) 
      : (...bs) => f(a, ...bs);

  const filter= curry(function *(f, iter) {
    for (const a of iter){
      if (f(a)) {
        yield a;
      }
    }
  })

  const map = curry(function *(f, iter) {
    for (const a of iter){
      yield f(a);
    }
  })

  const take = curry(function(length, iter) {
    let res = [];
    for (const a of iter) {
      res.push(a);
      if (res.length == length){
        return res
      }
    }
    return res
  })

  const reduce = curry(function (f, acc, iter) {
    if (arguments.length === 2){
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  })

  const add = curry((a, b) => a + b);

  const go = (...as)=> reduce((a, f) => f(a), as);

  go(10, a => a + 1, a => a+ 10 , log);

  const f = (list, length) =>  
    reduce(
      add, 
      0, 
      take(length, 
        map(a=> a*a ,
          filter(a => a % 2, list))));

  const f2 = (list, length) => go(
    list, 
      filter(a => a %2),
      map(a => a * a),
      take(length),
      reduce(add)
  )

  function main() {
    log(f2([1, 2, 3, 4, 5], 1));
    log(f2([1, 2, 3, 4, 5], 2));
    log(f2([1, 2, 3, 4, 5], 3));
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