"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPC = exports.isWechat = void 0;
/** 当前是否为微信环境 */
function isWechat() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(userAgent);
}
exports.isWechat = isWechat;
/** 当前是否为 */
function isPC() {
    const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    return !navigator.userAgent.match(reg);
}
exports.isPC = isPC;
