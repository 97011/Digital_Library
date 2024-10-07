"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeleteBookComponent = void 0;
var core_1 = require("@angular/core");
var DeleteBookComponent = /** @class */ (function () {
    function DeleteBookComponent(loclStrge, router, tostMsg) {
        this.loclStrge = loclStrge;
        this.router = router;
        this.tostMsg = tostMsg;
        this.dbookData = [];
    }
    DeleteBookComponent.prototype.navFn = function () {
        this.router.navigate(['/dashboard']);
    };
    DeleteBookComponent.prototype.delFn = function (index) {
        this.dbookData.splice(index, 1);
        this.loclStrge.setItem("lbraryDetails", this.dbookData, 'delete');
        this.tostMsg.add({
            severity: "error",
            summary: "Record Deleted",
            life: 2000
        });
    };
    DeleteBookComponent.prototype.ngOnInit = function () {
        this.dbookData = this.loclStrge.getItem("lbraryDetails") || [];
    };
    DeleteBookComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-book',
            templateUrl: './delete-book.component.html',
            styleUrls: ['./delete-book.component.css']
        })
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());
exports.DeleteBookComponent = DeleteBookComponent;
