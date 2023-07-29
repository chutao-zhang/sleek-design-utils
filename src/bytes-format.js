"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 字节转换
 * @param bytes 字节大小
 * @param decimals 保留小数点位数
 * @returns 转换单位后的结果
 */
function bytesFormat(bytes, decimals = 2) {
    if (typeof bytes !== "number" || bytes <= 0)
        return "0 Byte";
    const units = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toLocaleString("en-US", {
        maximumFractionDigits: decimals > 0 ? decimals : 0,
    })} ${units[i]}`;
}
exports.default = bytesFormat;
