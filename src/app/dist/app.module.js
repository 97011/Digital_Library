"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var dropdown_1 = require("primeng/dropdown");
var table_1 = require("primeng/table");
var chart_1 = require("primeng/chart");
var toast_1 = require("primeng/toast");
var api_1 = require("primeng/api");
var inputtextarea_1 = require("primeng/inputtextarea");
var calendar_1 = require("primeng/calendar");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var add_book_component_1 = require("./add-book/add-book.component");
var view_book_component_1 = require("./view-book/view-book.component");
var delete_book_component_1 = require("./delete-book/delete-book.component");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var local_storage_service_1 = require("./local-storage.service");
var router_1 = require("@angular/router");
var routes = [
    {
        path: "", component: login_component_1.LoginComponent
    },
    {
        path: "dashboard", component: dashboard_component_1.DashboardComponent
    },
    {
        path: "Addbook", component: add_book_component_1.AddBookComponent
    },
    {
        path: "viewbook", component: view_book_component_1.ViewBookComponent
    },
    {
        path: "deletebook", component: delete_book_component_1.DeleteBookComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                add_book_component_1.AddBookComponent,
                view_book_component_1.ViewBookComponent,
                delete_book_component_1.DeleteBookComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                forms_2.ReactiveFormsModule,
                dropdown_1.DropdownModule,
                animations_1.BrowserAnimationsModule,
                table_1.TableModule,
                chart_1.ChartModule,
                router_1.RouterModule.forRoot(routes),
                toast_1.ToastModule,
                inputtextarea_1.InputTextareaModule,
                calendar_1.CalendarModule
            ],
            providers: [local_storage_service_1.LocalStorageService, api_1.MessageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
