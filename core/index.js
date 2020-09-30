"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
var Core = /** @class */ (function () {
    function Core() {
        var _this = this;
        this.charLib = [];
        /**
         *
         * @param {iterator} itr - A string iterator var:string[Symbol.iterator]()
         *
         */
        this.iterate = function (itr) {
            var holder = itr.next();
            if (holder.done == false) {
                console.log(holder.value);
                _this.iterate(itr);
            }
        };
        this.process = function (char) {
        };
    }
    return Core;
}());
exports.Core = Core;
//# sourceMappingURL=index.js.map