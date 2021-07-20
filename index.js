var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
{
    var log_1 = console.log;
    function filter(f, list) {
        var _i, list_1, a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, list_1 = list;
                    _a.label = 1;
                case 1:
                    if (!(_i < list_1.length)) return [3 /*break*/, 4];
                    a = list_1[_i];
                    if (!f(a)) return [3 /*break*/, 3];
                    return [4 /*yield*/, a];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    function f(list, length) {
        var i = 0;
        var acc = 0;
        for (var _i = 0, _a = filter(function (a) { return a % 2; }, list); _i < _a.length; _i++) {
            var a = _a[_i];
            acc = acc + a * a;
            if (++i === length) {
                break;
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
