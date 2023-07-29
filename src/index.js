"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWechat = exports.isPC = exports.bytesFormat = exports.throttle = exports.debounce = void 0;
var debounce_1 = require("./debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return __importDefault(debounce_1).default; } });
var throttle_1 = require("./throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return __importDefault(throttle_1).default; } });
var bytes_format_1 = require("./bytes-format");
Object.defineProperty(exports, "bytesFormat", { enumerable: true, get: function () { return __importDefault(bytes_format_1).default; } });
var device_detect_1 = require("./device-detect");
Object.defineProperty(exports, "isPC", { enumerable: true, get: function () { return device_detect_1.isPC; } });
Object.defineProperty(exports, "isWechat", { enumerable: true, get: function () { return device_detect_1.isWechat; } });
