{
  const log = console.log 


  function* filter(f, list:number[]) {
    for (const a of list){
      if (f(a)) {
        yield a;
      }
    }
  }

  function f(list:number[], length:number) {
    let i = 0;
    let acc = 0;
    for (const a of filter((a: number) => a % 2, list)){
      acc = acc + a * a;
      if(++i === length){
        break
      }
    }
    log(acc)
  }

  function main() {
    f([1, 2, 3, 4, 5], 1);
    f([1, 2, 3, 4, 5], 2);
    f([1, 2, 3, 4, 5], 3);
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