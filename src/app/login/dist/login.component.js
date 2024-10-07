"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, tostMsg) {
        this.router = router;
        this.tostMsg = tostMsg;
    }
    LoginComponent.prototype.loginFn = function (dta) {
        var _this = this;
        var username = dta.form.value.uname.toLowerCase();
        var password = dta.form.value.upwd.toLowerCase();
        if (username === 'admin' && password === 'password') {
            this.tostMsg.add({
                severity: "success",
                summary: "LogIn Successfully",
                detail: "Welcome " + password,
                life: 500
            });
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1000);
        }
        else {
            this.tostMsg.add({
                severity: "error",
                summary: "Error",
                detail: "Please Enter Valid User Name and Password",
                life: 1500
            });
            dta.form.reset();
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
