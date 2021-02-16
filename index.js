"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.closeDriver = exports.setOrigin = exports.createDriver = exports.driver = void 0;
var utils = __importStar(require("./dist/src/utils/utils"));
var driver_1 = require("./dist/src/utils/driver");
/**
 * Creates a new chromedriver.
 */
function createDriver() {
    driver_1.createBuilder().then(function (r) {
        exports.driver = r;
    });
}
exports.createDriver = createDriver;
/**
 *
 * @param url [string] - The origin url.
 * @param title [string] - Window title.
 */
function setOrigin(url, title) {
    utils.setOrigin(exports.driver, url, title);
}
exports.setOrigin = setOrigin;
/**
 * Closes the web driver
 */
function closeDriver() {
    utils.closeDriver(exports.driver);
}
exports.closeDriver = closeDriver;
/**
 * Creates a new request.
 * @param url [string]
 * @param method [requestType]
 * @param headers [object]
 * @param data [string]
 */
function request(url, method, headers, data) {
    utils.request(exports.driver, url, method, headers, data);
}
exports.request = request;
