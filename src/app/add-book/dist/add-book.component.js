"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddBookComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(fb, loclStrge, tostMsg, router) {
        this.fb = fb;
        this.loclStrge = loclStrge;
        this.tostMsg = tostMsg;
        this.router = router;
        this.branches = [];
        this.addBookArrs = [];
        this.addBookGrp = fb.group({
            prsnName: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            prsnRollNo: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            isbnNo: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[0-9]+$'), forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            bokName: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            authr: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[a-zA-Z,. ]+$'), forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            publicatn: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[a-zA-Z,. ]+$'), forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            details: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[a-zA-Z0-9,. ]+$'), forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(250)]),
            qty: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[0-9]+$'), forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            price: new forms_1.FormControl(null, [forms_1.Validators.pattern('^[0-9]+$'), forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            brnch: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(50)]),
            issuedOn: new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.branches = [
            { label: "IT", value: "IT" },
            { label: "Civil", value: "Civil" },
            { label: "Mechanical", value: "Mechanical" }
        ];
    };
    AddBookComponent.prototype.navFn = function () {
        this.router.navigate(['/dashboard']);
    };
    AddBookComponent.prototype.addBokFn = function () {
        if (this.addBookGrp.valid) {
            console.log(this.addBookGrp.value);
            this.addBookArrs.push(this.addBookGrp.value);
            this.loclStrge.setItem('lbraryDetails', this.addBookGrp.value, "ADD");
            this.tostMsg.add({
                severity: "success",
                summary: "Record Added Successfully",
                life: 1000
            });
            this.addBookGrp.reset();
        }
    };
    AddBookComponent = __decorate([
        core_1.Component({
            selector: 'app-add-book',
            templateUrl: './add-book.component.html',
            styleUrls: ['./add-book.component.css']
        })
    ], AddBookComponent);
    return AddBookComponent;
}());
exports.AddBookComponent = AddBookComponent;
