"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocalStorageService = void 0;
var core_1 = require("@angular/core");
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, value, typ) {
        if (typ === "ADD") {
            if (window.localStorage[key]) {
                var val1 = JSON.parse(window.localStorage[key]);
                if (Array.isArray(val1)) {
                    val1.push(value);
                }
                else {
                    val1 = [val1, value];
                }
                window.localStorage.setItem(key, JSON.stringify(val1));
            }
            else {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    };
    LocalStorageService.prototype.getItem = function (key) {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : [];
    };
    LocalStorageService.prototype.removeItem = function (key) {
        window.localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        window.localStorage.clear();
    };
    LocalStorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
