"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewBookComponent = void 0;
var core_1 = require("@angular/core");
var ViewBookComponent = /** @class */ (function () {
    function ViewBookComponent(loclStrge, router) {
        this.loclStrge = loclStrge;
        this.router = router;
        this.bookData = [];
    }
    ViewBookComponent.prototype.navFn = function () {
        this.router.navigate(['/dashboard']);
    };
    ViewBookComponent.prototype.ngOnInit = function () {
        this.bookData = this.loclStrge.getItem("lbraryDetails") || [];
    };
    ViewBookComponent = __decorate([
        core_1.Component({
            selector: 'app-view-book',
            templateUrl: './view-book.component.html',
            styleUrls: ['./view-book.component.css']
        })
    ], ViewBookComponent);
    return ViewBookComponent;
}());
exports.ViewBookComponent = ViewBookComponent;
