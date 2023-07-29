"use strict";
/** 防抖
 * @param func 需要防抖的执行函数
 * @param delay 函数执行延时时长（ms）
 */
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
exports.default = debounce;
