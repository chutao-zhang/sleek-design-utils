"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 节流
 * @param func 需要节流的执行函数
 * @param delay 函数执行频率（时间间隔：ms）
 */
function throttle(func, delay) {
    let timeoutId = null;
    let lastArgs = null;
    return (...args) => {
        if (!timeoutId) {
            func(...args);
            timeoutId = setTimeout(() => {
                if (lastArgs) {
                    func(...lastArgs);
                    lastArgs = null;
                }
                timeoutId = null;
            }, delay);
        }
        else {
            lastArgs = args;
        }
    };
}
exports.default = throttle;
