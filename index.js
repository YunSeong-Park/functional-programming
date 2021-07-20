{
    var log_1 = console.log;
    function f(list, length) {
        var i = 0;
        var acc = 0;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var a = list_1[_i];
            if (a % 2) {
                acc = acc + a * a;
                if (++i === length) {
                    break;
                }
            }
        }
        log_1(acc);
    }
    function main() {
        f([1, 2, 3, 4, 5], 1);
        f([1, 2, 3, 4, 5], 2);
        f([1, 2, 3, 4, 5], 3);
    }
    main();
}
